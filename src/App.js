import React, {Component} from 'react';
import {getNews} from "./news";
import Moment from 'react-moment'
import './App.css';

class App extends Component {

 state = {articles: [], refreshing: true};



  componentDidMount() {
    this.fetchNews();
  }

  fetchNews(){
    getNews().then(articles => this.setState({articles, refreshing: false}
      )).catch(() => this.setState({refreshing: false}));

  }

  handleRefresh = () =>{
    this.setState({refreshing: true},
      ()=>this.fetchNews()
      )

  };




  render() {
      return (
        <div>
        <button onClick={this.handleRefresh}>Reload</button>
        <div style={{display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap'}}>
          {
            this.state.articles.map(
              (article,index) =>(

              <div key={index} style={{margin: 10}}>
                <a href={article.url} style={{color: 'black', textDecoration: 'none'}}>
                <img style={{width: 320, height: 180}} src={article.urlToImage} alt={article.title}/>
                <h1 style={{fontSize: 15, maxWidth: 320}}> {article.title}</h1>
                </a>
                <p style={{fontSize: 12, maxWidth: 320}}>{article.description}</p>
                <p style={{fontSize: 10}}>{article.author}</p>
                <Moment format="YYYY/MM/DD" date={article.publishedAt} style={{fontSize: 10}}/>
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
