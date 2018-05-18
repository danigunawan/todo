import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import constants from '../store/constants'

export default class AppHeader extends Component {
  render () {
    return (
      <div>
        <h3>TODO App</h3>
        <NavLink to={`/${constants.SHOW_ALL}`}>All</NavLink>&nbsp;
        <NavLink to={`/${constants.SHOW_ACTIVE}`}>Active</NavLink>&nbsp;
        <NavLink to={`/${constants.SHOW_COMPLETED}`}>Completed</NavLink>
      </div>
    )
  }
}
