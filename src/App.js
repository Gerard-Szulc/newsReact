import React, {Component} from 'react';
import {getNews} from "./news";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], refreshing: true}
    this.fetchNews = this.fetchNews.bind(this)

  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({articles, refreshing: false}
      ))
      .catch(() => this.setState({refreshing: false}))
  }

  handleRefresh = () =>{
    this.setState({
        refreshing: true
      },
      ()=>{this.fetchNews()}
    )
  }



  render() {
      return (
        <div>
        <button onClick={this.handleRefresh}>Reload</button>
        <ul>
          {
            this.state.articles.map(
              (article,index) => (
              <li key={index}>
                <img style={{width: 160, height: 90}} src={article.urlToImage}/>
                <h1> {article.title}</h1>
                <p>{article.author}</p>

                </li>
              )


            )
          }

        </ul>
        </div>


        )
  }





}

export default App;
