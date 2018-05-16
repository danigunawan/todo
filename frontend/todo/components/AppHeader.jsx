import React, { Component } from 'react'
import FilterLink from './FilterLink'
import constants from '../store/constants'

export default class AppHeader extends Component {
  render () {
    return (
      <div>
        Show:
        <FilterLink filter={constants.SHOW_ALL}>All</FilterLink>{', '}
        <FilterLink filter={constants.SHOW_ACTIVE}>Active</FilterLink>{', '}
        <FilterLink filter={constants.SHOW_COMPLETED}>Completed</FilterLink>
      </div>
    )
  }
}
