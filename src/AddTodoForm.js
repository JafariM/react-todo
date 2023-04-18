import React from "react";

function AddTodoForm({ onAddTodo }) {

  //state of input form for adding todo title
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  //handle form submission
  function handleAddTodo(event) {
    event.preventDefault();
    //pass the value of input form to App.js
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    //empty input field
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
      <button type="submit" >Add</button>
      <p>This is new to do list item:<strong>{todoTitle}</strong></p>
    </form>
  )
}

export default AddTodoForm;