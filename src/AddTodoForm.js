import React from "react";
import InputWithLabel from "./InputWithLabel";

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
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        label={'Title'}
      />
      <button type="submit" >Add</button>
      <p>This is new to do list item:<strong>{todoTitle}</strong></p>
    </form>
  )
}

export default AddTodoForm;