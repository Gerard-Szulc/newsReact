import React,{Component} from 'react'


export default class WeatherView extends Component{


  render(){
    return(
      this.props.weather !== null ? (
      <div>
      <h1>Weather in { this.props.weather.current_observation.display_location.full}</h1>
        <img src={"https" + this.props.weather.current_observation.icon_url.split("").slice(4).join("")} alt={'weatherIcon'}/>
        <p> temperature: {this.props.weather.current_observation.temp_c} </p>
        <img src={"https" + this.props.weather.current_observation.image.url.split("").slice(4).join("")} alt={'wundergroun logo'}/>
      </div>) : <h1>no weather</h1>

        )
  }


}