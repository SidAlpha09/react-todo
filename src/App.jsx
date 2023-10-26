import { useState } from "react";
import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState(""); //syntax: const [value,function()]=useState(default value)......here value is immutable
  const [todo, settodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    settodo((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("") //clear out the input after adding the element
  }

  function toggleTodo(id, completed) {
    settodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }
  function deleteTodo(id) {
    settodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form" action="">
        <div className="form-row">
          <label htmlFor="item"> Add New Item🎉</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item⭐</button>
      </form>
      <h1 className="header">List of activities</h1>
      <ul className="list">
        {todo.length===0 && "No Todos"}
        {todo.map((todo) => {
          //when returning an array of elements never forget to give a key like in line 35
          return <li key={todo.id}>
            <label>
              <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={e=>toggleTodo(todo.id,e.target.checked)}
              />
              
              {todo.title}
            </label>
            {/*()=> deleteTodo.....here we are passing a function which is calling deleteTodo to delete*/}
            <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>;
        })}
      </ul>
    </>
  );
};

export default App;
