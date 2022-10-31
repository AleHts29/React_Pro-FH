import { Todo, TodoState } from '../interfaces/interfaces';

type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {

    console.log({ action });

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }

        default:
            return state;
    }
}

export default todoReducer