import React from "react";

function AddTodoForm(props) {

  const [todoTitle, setTodoTitle] = React.useState('');
  const { onAddTodo } = props;

  function handleTitleChange(event) {

    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    //pass the value of input form to App.js
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    console.log(todoTitle);
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