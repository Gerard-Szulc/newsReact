import React, {Component, Fragment} from 'react';
import {getNews} from "./news";
import Article from "./components/Article";
import Pogoda from "./Weather/Pogoda";
import { UserProvider, withUser } from './contexts/Users';
import SignInForm from './components/authentication/SignIn'
import SignUpForm from './components/authentication/SignUp'


class App extends Component {
  state = {
    articles: [],
    refreshing: true,
};

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews() {
    getNews()
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

 

  render() {
    
    
  


    return (
    
        this.props.user === null ? (
              <div>
                <SignInForm/>
                <SignUpForm/>
              </div>
            ) : 
            (<Fragment>        
                  <Pogoda/>
                  <p>Signed user: {this.props.user.email} <button onClick={this.props.signOut}> Sign out</button></p>
                  <Article
                  handleRefresh={this.handleRefresh}
                  articles={this.state.articles}
              /></Fragment>)
          
      
    )
  }
}

export default withUser(App);
