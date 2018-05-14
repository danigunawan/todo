import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from 'todo/types'
import actions from 'todo/actions'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    if (!this.state.value.trim()) {
      return
    }
    this.props.dispatch(actions[types.todo.ADD_API](this.state.value))
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

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)
