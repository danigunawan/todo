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

  handleToggle = (event) => {
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
          onClick={this.handleToggle}
        />
        <label htmlFor={this.props.todo.id}>{this.props.todo.text}</label>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return {
    todoUpdate: newTodo => dispatch(todo.actions[types.todo.UPDATE_API](newTodo)),
    todoDelete: id => dispatch(todo.actions[types.todo.DELETE_API](id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
