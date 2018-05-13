import { connect } from 'react-redux'
import types from 'todo/types'
import actions from 'todo/actions'
import TodoList from 'todo/components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.filter.SHOW_ALL:
      return todos
    case types.filter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case types.filter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({ todos: getVisibleTodos(state.todos, state.filter) })

const mapDispatchToProps = dispatch => ({ onTodoClick: id => dispatch(actions.toggleTodo(id)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
