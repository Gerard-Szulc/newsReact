import React, {Component, Fragment} from 'react';
import {getNews} from "./news";
import Article from "./components/Article";
import Pogoda from "./Weather/Pogoda";

class App extends Component {

  state = {
    articles: [],
    refreshing: true};

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews().then(articles => this.setState({articles, refreshing: false}
    )).catch(() => this.setState({refreshing: false}));

  }

  handleRefresh = () => {
    this.setState({
        articles: [],
        refreshing: true},
      () => this.fetchNews()
    )

  };

  render() {
    return (
      <Fragment>
      <Pogoda/>
      <Article
        handleRefresh={this.handleRefresh}
        articles={this.state.articles}

      />
      </Fragment>
    )
  }
}

export default App;
