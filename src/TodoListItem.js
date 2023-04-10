import React from "react";


function TodoListItem(props) {
  console.log('todolistitem is rendered');
  return (
    <li>{props.todo}</li>
  )
}

export default TodoListItem;