import { createSelector } from 'reselect'
import constants from '../constants'
import filter from '../filter'

const todoState = state => state.todo

const getText = createSelector(todoState, todo => todo.get('text'))

const getResult = createSelector(todoState, todo => todo.get('result'))

const getEntities = createSelector(todoState, todo => todo.get('entities'))

const getTodos = createSelector(getEntities, entities => entities.get('todos'))

const getVisibleTodos = createSelector(filter.selectors.getFilter, getTodos, (filter, todos) => {
  switch (filter) {
    case constants.SHOW_COMPLETED:
      return todos.filter(todo => todo.get('completed'))
    case constants.SHOW_ACTIVE:
      return todos.filter(todo => !todo.get('completed'))
    case constants.SHOW_ALL:
    default:
      return todos
  }
})

export default {
  todoState,
  getText,
  getResult,
  getEntities,
  getTodos,
  getVisibleTodos
}
