import { connect } from 'react-redux'
import types from 'todo/types'
import actions from 'todo/actions'
import TodoList from 'todo/components/TodoList'

const getVisibleTodos = (todo, filter) => {
  switch (filter) {
    case types.filter.SHOW_COMPLETED:
      return todo.filter(t => t.completed)
    case types.filter.SHOW_ACTIVE:
      return todo.filter(t => !t.completed)
    case types.filter.SHOW_ALL:
    default:
      return todo
  }
}

const mapStateToProps = (state, ownProps) => ({ todo: getVisibleTodos(state.todo, ownProps.filter) })

const mapDispatchToProps = dispatch => ({ onTodoClick: id => dispatch(actions[types.todo.TOGGLE](id)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
