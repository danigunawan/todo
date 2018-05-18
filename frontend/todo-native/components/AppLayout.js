import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import types from '../../todo/store/types'
import todo from '../../todo/store/todo'
import AppHeader from './AppHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import {
  StyleSheet,
  View
} from 'react-native'
import AppNaigation from './AppNaigation'
import AppBreadcrumbs from './AppBreadcrumbs'

class AppLayout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.dispatch(todo.actions[types.todo.FETCH_API]('https://d52c7b08.ngrok.io'))
  }

  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TodoAdd />
        <AppBreadcrumbs />
        <TodoList />
        <AppNaigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})

export default connect()(AppLayout)
