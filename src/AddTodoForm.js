import react from "react";

function AddTodoForm(props) {

  function handleAddTodo(event) {
    event.preventDefault();
    let titleInput = event.target[0];
    let todoTitle = titleInput.value;

    //pass the value of input form to App.js
    props.onAddTodo(todoTitle);
    console.log(todoTitle);
    // clear input form
    titleInput.value = '';
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" name="title" ></input>
      <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodoForm;