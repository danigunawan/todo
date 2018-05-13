import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  render () {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
}

App.defaultProps = {
  name: 'Matz'
}

App.propTypes = {
  name: PropTypes.string
}
