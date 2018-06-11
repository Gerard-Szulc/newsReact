import React, {Component} from 'react';
import Moment from 'react-moment'
import IronImage from 'react-image-lazy-load-component';


export default class Article extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRefresh}>Reload</button>
        <div className={'news-container'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
          {
            this.props.articles.filter(article=>article.url.split("")[4] === "s").map(
              (article, index) => {
                  const backg = '#' + parseInt(Math.min(index*8+100,255),16)
                  const articleImg = article.urlToImage
               return (
                 <div key={index} style={{backgroundColor: backg}}>

                   <a  href={article.url} style={{textDecoration: 'none', color: 'white'}}>
                       {article.urlToImage !== null ?
                      <IronImage
                        className={'articleImage'}
                        placeholder={process.env.PUBLIC_URL + 'news.jpg'}
                        src={articleImg}
                        alt={article.title.slice(0,15)}

                           style={{
                        display: 'block',
                        maxWidth: 320, 
                        maxHeight: 180, 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                      }}

                      />
                      :
                      <img className={'articleImage'} style={{
                        display: 'block' ,
                        maxWidth: 320,
                        maxHeight: 180,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                           src={
                             process.env.PUBLIC_URL + '/news.jpg'
                           }
                           alt={article.title.slice(0,15)}
                      />
                    }
                    <h1 style={{fontSize: 15, maxWidth: 320}}> {article.title}</h1>
                   </a>
                  <p style={{fontSize: 9, maxWidth: 320}}>{article.source.name}</p>
                  <p style={{fontSize: 12, minWidth: 250, maxWidth: 320}}>{article.description}</p>
                  <p style={{fontSize: 10, maxWidth: 320}}>{article.author}</p>
                  <Moment format="YYYY/MM/DD" date={article.publishedAt} style={{fontSize: 10}}/>
                 </div>
                   )

                  }
            )
          }

        </div>
      </div>


    )

  }


}