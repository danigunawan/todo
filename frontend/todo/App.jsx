import React from 'react'
import Footer from 'todo/components/Footer'
import AddTodo from 'todo/containers/AddTodo'
import VisibleTodoList from 'todo/containers/VisibleTodoList'

export default () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
