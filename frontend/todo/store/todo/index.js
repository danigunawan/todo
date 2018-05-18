import { normalize } from 'normalizr'
import types from '../types'
import helper from '../helper'
import schema from './schema'

const initialState = {
  entities: { todos: {} },
  result: []
}

const reducers = helper.createReducer(initialState, {
  [types.todo.FETCH]: (state, action) => action.todos,

  [types.todo.ADD]: (state, { todo }) => {
    return { ...state,
      entities: { ...state.entities,
        todos: { ...state.entities.todos,
          [todo.id]: todo
        }
      },
      result: [ ...state.result, todo.id ]
    }
  },

  [types.todo.UPDATE]: (state, { todo }) => {
    return { ...state,
      entities: { ...state.entities,
        todos: { ...state.entities.todos,
          [todo.id]: todo
        }
      },
      result: [ ...state.result ]
    }
  },

  [types.todo.DELETE]: (state, { id }) => {
    let index = state.result.indexOf(id)
    return { ...state,
      entities: { ...state.entities,
        todos: { ...state.entities.todos,
          [id]: undefined
        }
      },
      result: [
        ...state.result.slice(0, index),
        ...state.result.slice(index + 1)
      ]
    }
  }
})

const actions = {
  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),

  [types.todo.NEW]: todos => ({ type: types.todo.NEW, todos }),

  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),

  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),

  [types.todo.ADD]: todo => ({ type: types.todo.ADD, todo }),

  [types.todo.FETCH_API]: (url = '') => {
    return async dispatch => {
      let response = await window.fetch(`${url}/todos`)
      let todos = await response.json()
      let normalizedTodos = normalize(todos, schema)
      dispatch(actions[types.todo.FETCH](normalizedTodos))
    }
  },

  [types.todo.ADD_API]: (text, url = '') => {
    return async dispatch => {
      let response = await window.fetch(`${url}/todos`, {
        method: 'post',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: text})
      })
      let todo = await response.json()
      dispatch(actions[types.todo.ADD](todo))
    }
  },

  [types.todo.UPDATE_API]: (todo, url = '') => {
    return async dispatch => {
      await window.fetch(`${url}/todos/${todo.id}`, {
        method: 'put',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      })
      dispatch(actions[types.todo.UPDATE](todo))
    }
  },

  [types.todo.DELETE_API] (id, url = '') {
    return async dispatch => {
      await window.fetch(`${url}/todos/${id}`, {
        method: 'delete',
        credentials: 'include'
      })
      dispatch(actions[types.todo.DELETE](id))
    }
  }
}

export default {
  actions,
  reducers
}
