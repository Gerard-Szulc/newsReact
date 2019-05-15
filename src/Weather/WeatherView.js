import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    weatherWidget: {
        display: 'flex',
        justifyContent: 'center'
    },
    weatherInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherText: {
        display: 'flex',
        flexDirection: 'column',
    },
    weatherTitle: {
        margin: '0px'
    }
});


class WeatherView extends Component {


    render() {
        const {classes} = this.props;

        return (
            this.props.weather !== null ? (
                <div className={classes.weatherWidget}>
                    <Paper className={classes.root} elevation={1}>
                        <div>
                            <Typography variant="h5" component="p">
                                <span className={classes.weatherTitle}>Weather in {this.props.weather.name}</span>
                            </Typography>
                            <div className={classes.weatherInfo}>
                                <div className={classes.weatherText}>
                                    <span> {this.props.weather.weather[0].description} </span>
                                    <span> {this.props.weather.main.temp} </span>
                                </div>

                                <img src={"http://openweathermap.org/img/w/" + this.props.weather.weather[0].icon + '.png'}
                                     alt={'weatherIcon'}/>
                            </div>
                            {/*  <img src={"https" + this.props.weather.current_observation.image.url.split("").slice(4).join("")} alt={'wundergroun logo'}/>*/}
                        </div>
                    </Paper>
                </div>) : <h1>no weather</h1>
        )
    }
}

export default withStyles(styles)(WeatherView)
