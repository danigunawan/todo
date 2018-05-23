import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import todo from '../store/todo'

class TodoList extends Component {
  render () {
    return (
      <div>
        {this.props.todos.map((todo, id) => <TodoItem key={id} todo={todo.toJS()} />).valueSeq().toArray()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ todos: todo.selectors.getVisibleTodos(state) })

export default connect(mapStateToProps)(TodoList)
