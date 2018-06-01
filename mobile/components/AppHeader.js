import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

class AppHeader extends Component {
  render () {
    return (
      <View style={{ alignSelf: 'center', padding: 10 }}>
        <Text>TODO App</Text>
      </View>
    )
  }
}

export default AppHeader
