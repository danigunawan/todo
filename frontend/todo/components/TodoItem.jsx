import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import types from '../store/types'
import todo from '../store/todo'
import api from '../store/api'

class TodoItem extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }),
    route: PropTypes.func.isRequired,
    todoUpdate: PropTypes.func.isRequired,
    todoDelete: PropTypes.func.isRequired
  }

  handleChange = event => {
    event.stopPropagation()
    if (this.props.isAuth) this.props.todoUpdate({ ...this.props.todo, completed: !this.props.todo.completed })
    else this.props.route('/login')
  }

  handleDelete = event => {
    event.stopPropagation()
    if (this.props.isAuth) this.props.todoDelete(this.props.todo.id)
    else this.props.route('/login')
  }

  render () {
    return (
      <div>
        <input
          id={this.props.todo.id}
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={this.handleChange}
        />
        <label htmlFor={this.props.todo.id}>{this.props.todo.text}</label>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: api.selectors.isAuth(state)
})

const mapDispatchToProps = dispatch => {
  return {
    route: route => dispatch(push(route)),
    todoUpdate: newTodo => dispatch(todo.actions[types.todo.API_UPDATE](newTodo)),
    todoDelete: id => dispatch(todo.actions[types.todo.API_DELETE](id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
