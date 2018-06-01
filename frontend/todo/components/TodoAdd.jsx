import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import types from '../store/types'
import todo from '../store/todo'
import auth from '../store/auth'

class TodoAdd extends Component {
  constructor (props) {
    super(props)
    this.state = { value: this.props.text }
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isAuth: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    setText: PropTypes.func.isRequired,
    route: PropTypes.func.isRequired
  }

  handleChange = event => this.setState({ value: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.value.trim()) return
    if (this.props.isAuth) {
      this.props.addTodo(this.state.value)
      this.props.setText('')
      this.setState({ value: '' })
    } else {
      this.props.setText(this.state.value)
      this.props.route('/login')
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type='submit'>Add Todo</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  text: todo.selectors.getText(state),
  isAuth: auth.selectors.isAuth(state)
})

const mapDispatchToProps = dispatch => ({
  route: route => dispatch(push(route)),
  addTodo: text => dispatch(todo.actions[types.todo.API_ADD](text)),
  setText: text => dispatch(todo.actions[types.todo.SET_TEXT](text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)
