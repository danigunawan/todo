import React, { Component } from 'react'
import { normalize } from 'normalizr'
import schema from './schema'
import {
  // Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entities: { todos: {} },
      result: [],
      index: 1,
      text: ''
    }
  }

  handleChange = text => this.setState({text: text})

  handleButton = () => {
    this.setState({
      entities: {
        todos: { ...this.state.entities.todos,
          [this.state.index]: { id: this.state.index, text: this.state.text, completed: false } }
      },
      result: [ ...this.state.result, this.state.index ],
      index: this.state.index + 1,
      text: ''
    })
  }

  async componentDidMount () {
    let response = await window.fetch('https://0836a63f.ngrok.io/todos')
    let todos = await response.json()
    let normalizedTodos = normalize(todos, schema)
    let maxIndex = Math.max(...normalizedTodos.result)
    this.setState({ ...normalizedTodos, index: maxIndex + 1 })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Add new todo</Text>
        <TextInput
          style={{height: 40}}
          placeholder='Go shopping'
          value={this.state.text}
          onChangeText={this.handleChange}
        />
        <Button
          onPress={this.handleButton}
          title='Add'
        />
        <ScrollView>
          {this.state.result.map((id) => (<Text key={id}>{this.state.entities.todos[id].text}</Text>))}
        </ScrollView>
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
