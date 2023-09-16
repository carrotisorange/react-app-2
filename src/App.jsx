
import { useState } from 'react'
import NewTodoForm from './components/NewTodoForm';


const App = () => {
  // const [newItem, setNewItem] = useState('');
  const [toDos, setToDos] = useState([]);

  function toggleTodo(id, completed){

    setToDos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo;
      });
    });
  }

  function deleteTodo(id){
    setToDos(currentTodos=>{
      return currentTodos.filter(todo => todo.id != id);
    });
  }

  function addTodo(newItem){
      setToDos(currentTodos=>{
        return [
           ...currentTodos, {id:crypto.randomUUID(), title:newItem, completed:false}
        ]
      });
  }
  return (
    <>
    
    {/* newtodocomponent   */}
      <NewTodoForm onSubmit={addTodo}/>
    {/* end newtodo component */}

   <h1 className='header'>
      ToDo List
    </h1>
       <h6>
      {toDos.length===0 && 'No list'}
    </h6>
    <ul className='list'>
      {toDos.map(todo=>{
        return(
          <li key={todo.id}>
        <label>
          <input onChange={e => toggleTodo(todo.id, e.target.checked)} type="checkbox" checked={todo.completed}/> {todo.title}
        </label>
        <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      </li>)
      })}
    </ul>
    </>
  )
}

export default App