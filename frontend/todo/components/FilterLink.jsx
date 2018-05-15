import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class FilterLink extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }

  render () {
    return (
      <NavLink
        to={`/${this.props.filter}`}
        activeStyle={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        {this.props.children}
      </NavLink>
    )
  }
}
