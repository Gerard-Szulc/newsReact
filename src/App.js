import React, { Component } from 'react';
import {getNews} from "./news";

import logo from './logo.svg';
import './App.css';
import Article from "./components/articles";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { articles: [], refreshing : true}
    this.fetchNews = this.fetchNews.bind(this)
  }

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews(){
    getNews()
      .then(articles=> this.setState({articles, refreshing: false}))
      .catch(()=>this.setState({refreshing: false}))
  }

  handleRefresh(){
    this.setState({
      refreshing: true},()=> this.fetchNews()
    )
  }
  render() {
    return (
      <div>
        <ul>
          <Article article={item}/>
        </ul>
      </div>
    );
  }
}

export default App;
