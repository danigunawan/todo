import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import types from '../store/types'
import todo from '../store/todo'
import api from '../store/api'

class TodoAdd extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
  }

  handleChange = event => this.setState({value: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.value.trim()) return
    if (!this.props.isAuth) return this.props.login()
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ isAuth: api.selectors.isAuth(state) })

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(push('/login')),
  addTodo: text => dispatch(todo.actions[types.todo.API_ADD](text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)
