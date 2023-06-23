import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types"; // ES6

function AddTodoForm({ onAddTodo }) {
  //state of input form for adding todo title
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  //handle form submission
  function handleAddTodo(event) {
    event.preventDefault();
    //pass the value of input form to App.js
    onAddTodo(todoTitle);
    //empty input field
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo} className={style.form}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}
const props = {
  onAddTodo: PropTypes.func,
};
export default AddTodoForm;
