import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  TextInput,
  View
} from 'react-native'
import todo from '../store/todo'

class TodoAdd extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = text => this.setState({ text: text })

  handleAdd = () => {
    if (!this.state.text.trim()) return
    this.props.dispatch(todo.actions[todo.types.API_ADD](this.state.text))
    this.setState({ text: '' })
  }

  render () {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder='New todo'
          value={this.state.text}
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleAdd}
        />
        <Button
          onPress={this.handleAdd}
          title='Add'
        />
      </View>
    )
  }
}

export default connect()(TodoAdd)
