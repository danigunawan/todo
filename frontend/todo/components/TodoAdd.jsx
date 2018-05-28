import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import todo from '../store/todo'
import api from '../store/api'

class TodoAdd extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    uuid: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  handleChange = (event) => this.setState({value: event.target.value})

  handleSubmit = (event) => {
    console.log(this.props.uuid)
    event.preventDefault()
    if (!this.state.value.trim()) return
    if (!this.props.isAuth) return console.log('not authorized')
    this.props.dispatch(todo.actions[types.todo.ADD_API](this.state.value))
    this.setState({ value: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ uuid: api.selectors.getUUID(state), isAuth: api.selectors.isAuth(state) })

export default connect(mapStateToProps)(TodoAdd)
