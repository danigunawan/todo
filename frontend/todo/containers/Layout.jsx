import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import types from 'todo/types'
import actions from 'todo/actions'
import Footer from 'todo/components/Footer'
import AddTodo from 'todo/containers/AddTodo'
import VisibleTodoList from 'todo/containers/VisibleTodoList'

class Layout extends Component {
  componentDidMount () {
    this.props.dispatch(actions[types.todo.FETCH_API]())
  }

  render () {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList filter={this.props.match.params.filter || types.filter.SHOW_ALL} />
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Layout)
