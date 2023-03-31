import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: 'Complete assignment'
  },
  {
    id: 2,
    title: 'praper the lunch'
  },
  {
    id: 3,
    title: 'pick up my son from school'
  }
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {

        return (<TodoListItem key={item.id} todo={item.title} />)
      })}
    </ul>
  )
}

export default TodoList;

