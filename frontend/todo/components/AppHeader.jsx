import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import constants from '../store/constants'
import filter from '../store/filter'
import types from '../store/types'
import auth from '../store/auth'

class AppHeader extends Component {
  static propTypes = {
    authID: PropTypes.string.isRequired,
    isAuth: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  handleAll = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_ALL))

  handleActive = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_ACTIVE))

  handleCompleted = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_COMPLETED))

  status = () => this.props.isAuth ? `logged in as ${this.props.authID}` : 'not logged in'

  render () {
    return (
      <div>
        <h3>TODO App</h3>
        <div>{this.status()}</div>
        <div>
          Narbar:&nbsp;
          <NavLink to={'/'}><span onClick={this.handleAll}>All</span></NavLink>&nbsp;
          <NavLink to={`/${constants.SHOW_ACTIVE}`} ><span onClick={this.handleActive}>Active</span></NavLink>&nbsp;
          <NavLink to={`/${constants.SHOW_COMPLETED}`} ><span onClick={this.handleCompleted}>Completed</span></NavLink>&nbsp;
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: auth.selectors.isAuth(state),
  authID: auth.selectors.getAuthID(state)
})

export default connect(mapStateToProps)(AppHeader)
