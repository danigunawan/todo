import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import todo from '../store/todo'
import AppHeader from './AppHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

class AppLayout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.dispatch(todo.actions[types.todo.FETCH_API]())
  }

  render () {
    return (
      <div>
        <AppHeader /> <br />
        <TodoAdd /> <br />
        <TodoList filter={this.props.match.params.filter || types.filter.SHOW_ALL} />
      </div>
    )
  }
}

export default connect()(AppLayout)
