import React from 'react'
import { connect } from 'react-redux'
import types from 'todo/types'
import actions from 'todo/actions'

export default connect()(
  ({ dispatch }) => {
    let input
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(actions[types.todo.ADD](input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type='submit'>
            Add Todo
          </button>
        </form>
      </div>
    )
  }
)
