import React from 'react'

const TodoList = (todo) => {
  return (
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
  )
}

export default TodoList