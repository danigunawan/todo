import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class AppLogin extends Component {
  render () {
    return (
      <div>
        <p>Login</p>
        <button onClick={this.props.root}>Login Here!</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ root: () => dispatch(push('/')) })

export default connect(null, mapDispatchToProps)(AppLogin)
