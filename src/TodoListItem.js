import React from "react";


function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li>
      {todo}
      &nbsp;
      <button type="button" onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  )
}

export default TodoListItem;