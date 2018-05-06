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
        <div >
        <button onClick={this.handleRefresh}>Reload</button>
        <div style={{display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap'}}>
          {
            this.state.articles.map(
              (article,index) => (


              <div key={index}>
                <a href={article.url} style={{}}>
                <img style={{width: 320, height: 180}} src={article.urlToImage}/>
                <h1 style={{fontSize: 15, maxWidth: 160}}> {article.title}</h1>
                </a>
                <p style={{fontSize: 10}}>{article.author}</p>

                <p style={{fontSize: 10, maxWidth: 160}}>{article.description}</p>
                </div>

              )


            )
          }

        </div>
        </div>


        )
  }





}

export default App;
