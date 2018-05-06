import React, {Component} from 'react';
import {getNews} from "./news";
import Article from "./components/Article";

class App extends Component {

  state = {articles: [], refreshing: true};

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews().then(articles => this.setState({articles, refreshing: false}
    )).catch(() => this.setState({refreshing: false}));

  }

  handleRefresh = () => {
    this.setState({refreshing: true},
      () => this.fetchNews()
    )

  };

  render() {
    return (
      <Article
        handleRefresh={this.handleRefresh}
        articles={this.state.articles}

      />
    )
  }
}

export default App;
