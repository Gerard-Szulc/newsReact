import React, {Component} from 'react';
import Moment from 'react-moment'

export default class Article extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRefresh}>Reload</button>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          {
            this.props.articles.map(
              (article, index) => (

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