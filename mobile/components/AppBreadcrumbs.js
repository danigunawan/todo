import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class AppHeader extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired
  }

  render () {
    return (
      <View style={{ alignSelf: 'center', padding: 10 }}>
        <Text>{this.props.filter.toUpperCase()} TODOS:</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({ filter: state.filter })

export default connect(mapStateToProps)(AppHeader)
