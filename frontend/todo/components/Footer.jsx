import React, { Component } from 'react'
import FilterLink from './FilterLink'
import types from 'todo/types'

export default class Footer extends Component {
  render () {
    return (
      <div>
        Show:
        <FilterLink filter={types.filter.SHOW_ALL}>All</FilterLink>{', '}
        <FilterLink filter={types.filter.SHOW_ACTIVE}>Active</FilterLink>{', '}
        <FilterLink filter={types.filter.SHOW_COMPLETED}>Completed</FilterLink>
      </div>
    )
  }
}
