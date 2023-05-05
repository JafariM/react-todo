import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


//NO USE
//define a custom hook to syn todolist and browser local storage
// function useSemiPersistentState() {
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem('savedTodoList') || []) // read initial value of state hook form local storage
//   );
//   //set a side effect hook to save the todolist in browser's local storage
//   React.useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList))
//   }, ['savedTodoList', JSON.stringify(todoList)]); // with stringify we can read the values inside todolist array
//   return [todoList, setTodoList];
// }

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        // read initial value of state hook form local storage
        () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }),
        2000)
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    }
    )
  }, []);
  //set a side effect hook to save the todolist in browser's local storage
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }

  }, ['savedTodoList', JSON.stringify(todoList)]); // with stringify we can read the values inside todolist array

  // const [todoList, setTodoList] = useSemiPersistentState();

  // add new todo to the list and update todolist
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  //remove an item from todoList
  function removeTodo(id) {
    const updatedTodo = todoList.filter(
      (todoItem) => todoItem.id !== id   //remove item if does not match the id
    )
    setTodoList(updatedTodo);

  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
