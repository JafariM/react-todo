import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList(props) {
  //Destructure props 
  const { todoList, } = props;
  return (
    <ul>
      {todoList.map(function (item) {

        return (<TodoListItem key={item.id} todo={item.title} />)
      })}
    </ul>
  )
}

export default TodoList;

