import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      result: PropTypes.arrayOf(PropTypes.number.isRequired),
      entities: PropTypes.shape({
        todos: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }

  render () {
    return (
      <div>
        {this.props.todo.result.map((id, index) => (
          <TodoItem key={id} todo={this.props.todo.entities.todos[id]} />
        ))}
      </div>
    )
  }
}

const getVisibleTodos = (todo, filter) => {
  let result
  switch (filter) {
    case types.filter.SHOW_COMPLETED:
      result = todo.result.filter(id => todo.entities.todos[id].completed)
      return {
        entities: { todos: result.reduce((obj, id) => ({...obj, [id]: todo.entities.todos[id]}), {}) },
        result
      }
    case types.filter.SHOW_ACTIVE:
      result = todo.result.filter(id => !todo.entities.todos[id].completed)
      return {
        entities: { todos: result.reduce((obj, id) => ({...obj, [id]: todo.entities.todos[id]}), {}) },
        result
      }
    case types.filter.SHOW_ALL:
    default:
      return todo
  }
}

const mapStateToProps = (state, ownProps) => ({ todo: getVisibleTodos(state.todo, ownProps.filter) })

export default connect(mapStateToProps)(TodoList)
