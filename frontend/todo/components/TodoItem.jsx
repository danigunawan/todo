import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import todo from '../store/todo'

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }),
    todoUpdate: PropTypes.func.isRequired,
    todoDelete: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    event.stopPropagation()
    this.props.todoUpdate({ ...this.props.todo, completed: !this.props.todo.completed })
  }

  handleDelete = (event) => {
    event.stopPropagation()
    this.props.todoDelete(this.props.todo.id)
  }

  render () {
    return (
      <div>
        <input
          id={this.props.todo.id}
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={this.handleChange}
        />
        <label htmlFor={this.props.todo.id}>{this.props.todo.text}</label>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todoUpdate: newTodo => dispatch(todo.actions[types.todo.API_UPDATE](newTodo)),
    todoDelete: id => dispatch(todo.actions[types.todo.API_DELETE](id))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
