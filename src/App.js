import React, {Component, Fragment} from 'react';
import {getNews} from "./news";
import Article from "./pages/ArticlesPage";
import Weather from "./Weather/Weather";
import {withUser} from './contexts/Users';
import SignInForm from './components/authentication/SignIn'
import SignUpForm from './components/authentication/SignUp'
import './loginAnimation.scss'
import CountryContentSelect from './components/CountryContentSelect'
import {Button} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    signing: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

class App extends Component {
    state = {
        articles: [],
        refreshing: true,
        selectValue: 'us',
        signIn: true
    };

    componentDidMount() {
        this.fetchNews();
    }

    async fetchNews() {
        this.state.selectValue === null && this.setState({selectValue: 'us'})
        await getNews(this.state.selectValue)
            .then(articles => this.setState(
                {articles, refreshing: false}
                )
            ).catch(
                () =>
                    this.setState(
                        {refreshing: false}
                    )
            );
    }

    handleRefresh = () => {
        this.setState({
                articles: [],
                refreshing: true
            },
            () => this.fetchNews()
        )
    };

    handleSelectChange = event => {
        this.setState({
            selectValue: event.target.value,
        }, this.handleRefresh())
    }

    handleSelectSubmit = event => {
        this.handleRefresh()
        event.preventDefault();
    }

    toggleSignMode = (event) => {
        let value = !this.state.signIn
        this.setState({signIn: value})
    }


    render() {
        const {classes} = this.props
        return (
            this.props.user === null ? (
                    this.props.signing === true ?
                        <div className='loader'></div> : <div className={classes.signing}>
                            {this.state.signIn ?
                                <SignInForm/> :
                                <SignUpForm/>
                            }
                            <Button variant="contained" color={this.state.signIn ? 'primary' : 'secondary'} className={classes.button} onClick={this.toggleSignMode}>{this.state.signIn ?
                                'Sign Up' :
                                'Sign In'
                            }</Button>
                        </div>
                ) :
                (
                    <Fragment>
                        <Weather/>
                        <CountryContentSelect handleSelectSubmit={this.handleSelectSubmit}
                                              selectValue={this.state.selectValue}
                                              handleSelectChange={this.handleSelectChange}/>
                        <p>Signed user: {this.props.user.email}
                            <button onClick={this.props.signOut}>Sign out</button>
                        </p>
                        {this.state.refreshing === true ? <div className='loader'></div> : <Article
                            handleRefresh={this.handleRefresh}
                            articles={this.state.articles}
                        />}

                    </Fragment>
                )


        )
    }
}

export default withStyles(styles)(withUser(App));
