import { useSelector } from 'react-redux';
function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="space-y-2 mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-100 p-3 rounded shadow hover:bg-gray-200 transition"
          >
            <h2 className="text-lg text-black">{todo.text}</h2>
          </div>
        ))
      )}
    </div>
  )
}
export default TodoList;
