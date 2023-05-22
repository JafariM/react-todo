// add new todo to the list and update todolist
function addTodo(newTodo) {
  setTodoList([...todoList, newTodo]);
}

//remove an item from todoList
function removeTodo(id) {
  const updatedTodo = todoList.filter(
    (todoItem) => todoItem.id !== id //remove item if does not match the id
  );
  setTodoList(updatedTodo);
}
