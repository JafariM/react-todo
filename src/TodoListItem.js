import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li className={style.listItem}>
      {todo}
      &nbsp;
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
