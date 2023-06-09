import React from "react";
import TodoListItem from "./TodoListItem";
import propTypes from "prop-types";
import style from "./TodoContainer.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem
            key={item.id}
            todo={item.title}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
      <li className={style.footerItem}>
        {Object.keys(todoList).length} Items left
      </li>
    </ul>
  );
}
TodoList.propTypes = {
  todoList: propTypes.array,
  onRemoveTodo: propTypes.func,
};

export default TodoList;
