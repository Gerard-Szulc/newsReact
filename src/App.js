import React, {Component, Fragment} from 'react';
import {getNews} from "./news";
import Article from "./components/Article";
import Pogoda from "./Weather/Pogoda";
import { withUser } from './contexts/Users';
import SignInForm from './components/authentication/SignIn'
import SignUpForm from './components/authentication/SignUp'


class App extends Component {
  state = {
    articles: [],
    refreshing: true,
    selectValue: 'pl'
};

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews() {
      this.state.selectValue === null && this.setState({selectValue: 'us'}) 
    
    getNews(this.state.selectValue)
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
        refreshing: true},
      () => this.fetchNews()
    )

  };

  handleSelectChange = event => {
this.setState({
  selectValue: event.target.value,
      },this.handleRefresh())
  }

  handleSelectSubmit = event =>{
    this.handleRefresh()
    event.preventDefault();
  }


  render() {
    
    return (
    
        this.props.user === null ? (
              <div>
                <SignInForm/>
                <SignUpForm/>
              </div>
            ) : 
            (
            <Fragment>        
                  <Pogoda/>
                  <form onSubmit={this.handleSelectSubmit} >
                  <label>
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                      <option value='us'>USA</option>
                      <option value='pl'>Poland</option>
                      <option value='de'>Germany</option>
                      <option value='gb'>England</option>
                    </select>
                  </label>
                  </form>
                  <p>Signed user: {this.props.user.email} <button onClick={this.props.signOut}>Sign out</button></p>
                  <Article
                  handleRefresh={this.handleRefresh}
                  articles={this.state.articles}
              />
            </Fragment>
            )
          
      
    )
  }
}

export default withUser(App);
