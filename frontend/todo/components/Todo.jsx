import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  render () {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo
