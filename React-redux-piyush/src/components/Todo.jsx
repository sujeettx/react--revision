import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../features/todo';

const Todo = () => {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Todo List</h2>
            <input 
            style={{padding:"10px",
                marginTop:"5opx",
                color:"white",
                fontWeight:"bold",
                fontSize:"20px",
                border:"2px solid black",
                borderRadius:"10px",
                backgroundColor:"black"}}
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter a task"
            />
            <button
            style={{
               padding:"8px",
                fontSize:"20px",
                marginBottom:"3px",
                color:"gray"

            }}
             onClick={() => { dispatch(addTodo(text)); setText(''); }}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
