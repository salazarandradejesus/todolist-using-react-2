import React from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")




function handleSubmit(e) {
  e.preventDefault()

  const newTodo = {
    id: new Date().getTime(),
    text: todo,
    completed: false,
  }

  setTodos([...todos].concat(newTodo))
  setTodo("")
}

function deleteTodo(id){
  const updatedTodos = [...todos].filter((todo) => todo.id !== id)

  setTodos(updatedTodos)
}

function toggleComplete(id){
  const updatedTodos = [...todos].map((todo) => {
    if (todo.id === id) {
    todo.completed = !todo.completed
    }
    return todo
  })

setTodos(updatedTodos)

}

return (
  <div className="App">
    <form onSubmit={handleSubmit}>
    <div className="todo-header"><h1>TodoList</h1></div>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
      <button type="submit">Add Todo</button>
    </form>
    {todos.map((todo) => <div key={todo.id}>
      <div>{todo.text}</div>
      <button  onClick={() => deleteTodo(todo.id)}>Delete</button> 
      </div>)}
  </div>
);
}

export default App;