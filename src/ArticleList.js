import React , {Component} from 'react'
import Article from "./components/articles";


export default class ArticleList extends Component {
  render(){
    return(
      <Article
        data={this.props.data}
        keyExtractor={item=>item.url}
        refreshing={this.props.refreshing}
        onRefresh={this.props.onRefresh}
      />
    )
  }
}