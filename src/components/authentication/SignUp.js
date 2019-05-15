import React, { Component } from 'react'
import { withUser } from '../../contexts/Users';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  signUpForm: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.username, this.state.password).catch(
      error => this.setState({ error })
    )
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.signUpForm}>
        <Paper className={classes.root} elevation={1}>

        <h2>Sign up</h2>
        {this.state.error && <p>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <TextField
              error={!!this.props.signInError}
              id="standard-username-input"
              label="Username"
              name="username"
              value={this.state.username}
              className={classes.textField}
              autoComplete="new-username"
              type="text"
              margin="normal"
              onChange={this.handleChange}
          />
          <TextField
              error={!!this.props.signInError}
              id="standard-password-input"
              label="Password"
              name="password"
              value={this.state.password}
              className={classes.textField}
              type="password"
              autoComplete="new-password"
              margin="normal"
              onChange={this.handleChange}
          />
          <button id="btn-sign-up" style={{display: 'none'}}>sdf</button>
          <Button variant="contained" color="primary" className={classes.button} onClick={(event) => document.getElementById('btn-sign-up').click()}>Sign up</Button>

        </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(withUser(SignUpForm))
