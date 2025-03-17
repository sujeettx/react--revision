import { useContext,createContext } from "react";
export const TodoContext = createContext({
    todos :[
        {id:1,
        title:"Todo 1",
        completed:false}
        ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    ToggleComplete:(id)=>{}
});

export const Todoprovider = TodoContext.Provider;
export const useTodo = ()=>useContext(TodoContext);
