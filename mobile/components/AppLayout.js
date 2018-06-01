import React, { Component } from 'react'

import AppHeader from './AppHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import {
  StyleSheet,
  View
} from 'react-native'
import AppNaigation from './AppNaigation'
import AppBreadcrumbs from './AppBreadcrumbs'

export default class AppLayout extends Component {
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
