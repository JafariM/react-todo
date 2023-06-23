import React from "react";
import TodoListItem from "./TodoListItem";
import propTypes from "prop-types";

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
    </ul>
  );
}
TodoList.propTypes = {
  todoList: propTypes.array,
  onRemoveTodo: propTypes.func,
};

export default TodoList;
