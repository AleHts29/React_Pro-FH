import React from 'react'
import { Title } from './compoents/Title'
import { TodoList } from './compoents/TodoList'
import TodoProvider from './context/TodoProvider'

const Todo = () => {
    return (
        <TodoProvider>

            <div>Todo</div>
            <Title />
            <TodoList />

        </TodoProvider>

    )
}

export default Todo