import {
    useContext,
    createContext
} from 'react'

export const todoContext = createContext({
    Todos: [
        {
            todo: "default todo",
            id: 1,
            completedStatus: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (todo, id) => { },
    toggleComplete: (id) => { }
})

export const todoProvider = todoContext.Provider

const useTodo = () => {
    return useContext(todoContext)
}

export default useTodo;