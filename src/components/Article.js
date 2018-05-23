import React, {Component} from 'react';
import Moment from 'react-moment'

export default class Article extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRefresh}>Reload</button>
        <div className={'news-container'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
          {
            this.props.articles.map(
              (article, index) => {
                  const backg = '#' + parseInt(Math.min(index*8+100,255),16)
               return (
               <div key={index} style={{padding: 10,margin: 0, backgroundColor: backg,}}>
                  <a href={article.url} style={{color: 'black', textDecoration: 'none'}}>
                    {article.urlToImage !== null ?
                      <img style={{display: 'block',maxWidth: 320, maxHeight: 180, marginLeft: 'auto', marginRight: 'auto'}} src={ article.urlToImage} alt={article.title.slice(0,15)}/>:
                      <img style={{display: 'block' ,maxWidth: 320, maxHeight: 180, marginLeft: 'auto', marginRight: 'auto'}} src={'https://cst.org.uk/data/image/8/e/8e3e848cbd24bdb85a7c97869ec77386.1451995352.jpg'} alt={article.title.slice(0,15)}/>
                    }
                    <h1 style={{fontSize: 15, maxWidth: 320}}> {article.title}</h1>
                  </a>
                  <p style={{fontSize: 9, maxWidth: 320}}>{article.source.name}</p>
                  <p style={{fontSize: 12, minWidth: 250, maxWidth: 320}}>{article.description}</p>
                  <p style={{fontSize: 10, maxWidth: 320}}>{article.author}</p>
                  <Moment format="YYYY/MM/DD" date={article.publishedAt} style={{fontSize: 10}}/>
                </div>)

                  }
            )
          }

        </div>
      </div>


    )

  }


}