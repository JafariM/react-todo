import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

  const [newTodo, setNewTodo] = React.useState();
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>This is new to do list item:<strong>{newTodo}</strong></p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
