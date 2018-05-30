import React, { Component } from 'react'
import {auth} from 'firebase'
const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

export class UserProvider extends Component {
  state = {
    signInError: null,
    user: null,
    signing: null,

    signIn: (username, password) => {
      this.setState({signing: true})
      auth().signInWithEmailAndPassword(username, password).catch(
        error => this.setState({
          signInError: error,
          signing: false
        })
      )
    },
    signOut: () => auth().signOut(),
    signUp: (username, password) => {
      return auth().createUserWithEmailAndPassword(username, password)
    }

  }

  componentDidMount() {
    this.unsubscribe = auth().onAuthStateChanged(
      user => this.setState({ user: user ,
      signing: false})
    )
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export function withUser(Component) {
  function UserAwareComponent(props) {
    return (
      <UserConsumer>
        {
          state => <Component {...props} {...state}/>
        }
      </UserConsumer>
    );
  }

  UserAwareComponent.displayName = `UserAware(${Component.displayName || Component.name || 'Component'})`

  return UserAwareComponent
}