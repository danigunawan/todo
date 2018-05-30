import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import types from '../store/types'
import api from '../store/api'

class AppLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    })
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
    this.props.history.goBack()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:
          <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Login' />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(api.actions[types.api.LOGIN](email, password))
})

export default withRouter(connect(null, mapDispatchToProps)(AppLogin))
