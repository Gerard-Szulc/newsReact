import React, { Component } from 'react';
import '../App.css';
import {getWeather} from "./weatherFetcher";
import WeatherView from "./WeatherView";


class Pogoda extends Component {
  state = {
    weather: null,
    refreshing: false,
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    getWeather().then(weather => this.setState({weather: weather, refreshing: false}))
      .catch((error) =>  this.setState({refreshing: false}, console.log(error.message)));

  }

  handleWRefresh = () => {
    this.setState({
        refreshing: true},
      () => this.fetchWeather()
    )

  };

  render() {
    return (
      <div className="App">
        <WeatherView handleWRefresh={this.handleWRefresh} weather={this.state.weather}/>
      </div>
    );
  }
}

export default Pogoda;
