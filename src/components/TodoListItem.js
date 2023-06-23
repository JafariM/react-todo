import React from "react";
import style from "./TodoListItem.module.css";
import img from "../img/check.png";

function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li className={style.listItem}>
      <img src={img} onClick={() => onRemoveTodo(id)} />
      {todo}
      &nbsp;
    </li>
  );
}

export default TodoListItem;
