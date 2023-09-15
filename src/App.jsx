
import { useState } from 'react'

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e){
    e.preventDefault()
    if(newItem === ""){
      return
    }else{
     
      setToDos(currentTodo=>{
        console.log(currentTodo);
        return [
           ...currentTodo, {id:crypto.randomUUID(), title:newItem, completed:false}
        ]
      });

    
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="">New Item</label>
        <input onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className='btn'>Add</button>
    </form>

    <h1 className='header'>Todo List </h1>
    <ul className='list'>
      <li>
        <label htmlFor="">
          <input type="checkbox" /> {newItem}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  )
}

export default App