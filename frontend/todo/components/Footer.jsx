import React from 'react'
import FilterLink from 'todo/containers/FilterLink'
import types from 'todo/types'

export default () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={types.VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={types.VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={types.VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)
