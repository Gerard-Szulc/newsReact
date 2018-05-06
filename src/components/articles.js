import React,{Component} from 'react'



export default class Article extends Component{
  render(){
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;

    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';



    return(
      <div onClick={() => Linking.openURL(url)}>
        <div
        featuredTitle={title}
        featuredTitleStyle={featuredTitleStyle}
        image={{
          uri: urlToImage || defaultImg
        }}
        >
          <p style={{marginBottom: 10}}>
            {description||'REad More...'}
          </p>



        </div>
      </div>

    )
  }
}