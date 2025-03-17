import {useDispatch,useSelector} from 'react-redux';
import {fetchTodo} from '../features/Todo';
const TodoList = () => {
    const dispath = useDispatch()
    const Todo = useSelector(state => state.Todo);
    if(Todo.isLoding){
        return <h2>Loding ...</h2>
    }
  return (
    <div>
      <h2>todo list</h2>
      <button
      onClick={()=>{
        dispath(fetchTodo())
      }}
      >Fetch Todo
      </button>
      
      {Todo.data && Todo.data.map((todo)=>{
        return <li
        style={{
            textAlign:"left"
        }}
         key={todo.id}>{todo.title}</li>
      })}
    </div>
  )
}

export default TodoList
