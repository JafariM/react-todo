import React from "react";


function TodoListItem(props) {
  //Destructure props 
  const { todo } = props;
  return (
    <li>{todo}</li>
  )
}

export default TodoListItem;