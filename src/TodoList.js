import React from 'react';

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return (<li key={item.id}>{item.title}</li>)
      })}
    </ul>
  )
}

export default TodoList;

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