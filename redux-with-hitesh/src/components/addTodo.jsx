import React, { useState } from 'react';
import { addTodo } from '../app/Features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo({ text: input }));
    setInput('');
  };
  return (
    <div>
      <form onSubmit={addTodoHandler} className="flex items-center justify-center gap-2 my-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddTodo;
