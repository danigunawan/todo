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
    this.props.dispatch(actions[types.todo.FETCH_ALL]())
  }

  render () {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStoreToProps = store => ({ store })

export default connect(mapStoreToProps)(Layout)
