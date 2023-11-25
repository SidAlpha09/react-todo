import { useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App = () => {
   //syntax: const [value,function()]=useState(default value)......here value is immutable
  const [todo, settodo] = useState([]);

  function addTodo(title){
    settodo((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: newItem, completed: false },
          ];
        });
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
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">List of activities</h1>
      <TodoList todo={todo}/>
    </>
  );
};

export default App;
