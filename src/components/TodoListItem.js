import React from "react";
import style from "./TodoListItem.module.css";
import img from "../img/check.png";
import propTypes from "prop-types";

function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li className={style.listItem}>
      <img src={img} onClick={() => onRemoveTodo(id)} />
      {todo}
      &nbsp;
    </li>
  );
}

const props = {
  todo: propTypes.string,
  onRemoveTodo: propTypes.func,
  id: propTypes.number,
};
export default TodoListItem;
