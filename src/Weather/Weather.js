import React, {Component} from 'react';
import '../App.css';
import {getWeather} from "./weatherFetcher";
import WeatherView from "./WeatherView";

const defaultLocation = 12;


export default class Weather extends Component {
    state = {
        weather: null,
        refreshing: false,
        location: {lat: null, long: null}
    };


    componentDidMount() {
        this.getLocation()
    }

    getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({location: {lat: position.coords.latitude, long: position.coords.longitude}});
                this.fetchWeather();
            });
        } else {
            this.setState({location: defaultLocation})
        }
    }

    async fetchWeather() {
        await getWeather(this.state.location).then(weather => {
            this.setState({weather: weather, refreshing: false})
        })
            .catch((error) => this.setState({refreshing: false}, console.error(error.message)));

    }

    handleWRefresh = () => {
        this.setState({
                refreshing: true
            },
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
