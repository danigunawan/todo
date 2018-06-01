import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckBox from 'react-native-checkbox'
import {
  Button,
  View
} from 'react-native'

import types from '../../todo/store/types'
import todo from '../../todo/store/todo'

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

  handleToggle = checked => this.props.todoUpdate({ ...this.props.todo, completed: !checked })

  handleDelete = () => this.props.todoDelete(this.props.todo.id)

  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          label={this.props.todo.text}
          checked={this.props.todo.completed}
          onChange={this.handleToggle}
        />
        <Button title='X' color='red' onPress={this.handleDelete} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todoUpdate: newTodo => dispatch(todo.actions[types.todo.UPDATE_API](newTodo, 'https://krevoe.com')),
    todoDelete: id => dispatch(todo.actions[types.todo.DELETE_API](id, 'https://krevoe.com'))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
