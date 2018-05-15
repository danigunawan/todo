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
  },

  [types.todo.TOGGLE]: (state, { id }) => {
    return { ...state,
      entities: { ...state.entities,
        todos: { ...state.entities.todos,
          [id]: { ...state.entities.todos[id], completed: !state.entities.todos[id].completed }
        }
      },
      result: [ ...state.result ]
    }
  }
})

const actions = {
  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),

  [types.todo.NEW]: todos => ({ type: types.todo.NEW, todos }),

  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),

  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),

  [types.todo.ADD]: todo => ({ type: types.todo.ADD, todo }),

  [types.todo.TOGGLE]: id => ({ type: types.todo.TOGGLE, id }),

  [types.todo.FETCH_API] () {
    return (dispatch) => {
      return window.fetch('/todos')
        .then(response => response.json())
        .then(json => {
          let todos = normalize(json, schema.todosArraySchema)
          dispatch(actions[types.todo.FETCH](todos))
        })
    }
  },

  [types.todo.ADD_API] (text) {
    return (dispatch) => {
      return window.fetch('/todos', {
        method: 'post',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: text})
      })
        .then(response => response.json())
        .then(json => dispatch(actions[types.todo.ADD](json)))
    }
  },

  [types.todo.UPDATE_API] (todo) {
    return (dispatch) => {
      return window.fetch(`/todos/${todo.id}`, {
        method: 'put',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      })
        .then(() => {
          dispatch(actions[types.todo.UPDATE](todo))
        })
    }
  },

  [types.todo.DELETE_API] (id) {
    return (dispatch) => {
      return window.fetch(`/todos/${id}`, {
        method: 'delete',
        credentials: 'include'
      })
        .then(() => dispatch(actions[types.todo.DELETE](id)))
    }
  }
}

export default {
  actions,
  reducers
}
