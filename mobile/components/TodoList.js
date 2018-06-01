import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import TodoItem from './TodoItem'
import todo from '../store/todo'

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired
  }

  render () {
    return (
      <ScrollView style={{ paddingTop: 10 }} contentContainerStyle={{ flexGrow: 1, flexDirection: 'column' }}>
        {this.props.todos.map((todo, id) => <TodoItem key={id} todo={todo.toJS()} />).valueSeq().toArray()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({ todos: todo.selectors.getVisibleTodos(state) })

export default connect(mapStateToProps)(TodoList)
