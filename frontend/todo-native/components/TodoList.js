import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import TodoItem from './TodoItem'
import constants from '../../todo/store/constants'

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
      <ScrollView style={{ paddingTop: 10 }} contentContainerStyle={{ flexGrow: 1, flexDirection: 'column' }}>
        {this.props.todo.result.map((id, index) => (
          <TodoItem key={id} todo={this.props.todo.entities.todos[id]} />
        ))}
      </ScrollView>
    )
  }
}

const getVisibleTodos = (todo, filter) => {
  let result
  switch (filter) {
    case constants.SHOW_COMPLETED:
      result = todo.result.filter(id => todo.entities.todos[id].completed)
      return {
        entities: { todos: result.reduce((obj, id) => ({...obj, [id]: todo.entities.todos[id]}), {}) },
        result
      }
    case constants.SHOW_ACTIVE:
      result = todo.result.filter(id => !todo.entities.todos[id].completed)
      return {
        entities: { todos: result.reduce((obj, id) => ({...obj, [id]: todo.entities.todos[id]}), {}) },
        result
      }
    case constants.SHOW_ALL:
    default:
      return todo
  }
}

const mapStateToProps = state => ({ todo: getVisibleTodos(state.todo, state.filter) })

export default connect(mapStateToProps)(TodoList)
