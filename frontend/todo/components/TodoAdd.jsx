import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import todo from '../store/todo'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleChange = (event) => this.setState({value: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.value.trim()) return
    this.props.dispatch(todo.actions[types.todo.ADD_API](this.state.value))
      .then(() => this.setState({ value: '' }))
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

export default connect()(AddTodo)
