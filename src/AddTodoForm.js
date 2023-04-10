import react from "react";

function AddTodoForm(props) {

  function handleAddTodo(event) {
    event.preventDefault();
    let todoTitle = event.target.title.value;
    //pass the value of input form to App.js
    props.onAddTodo(todoTitle);
    console.log(todoTitle);
    event.target.reset();
  }
  console.log('Addtodoform is rendered');
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" name="title" ></input>
      <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodoForm;