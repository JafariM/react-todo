import React from 'react';

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
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (<li key={item.id}>{item.title}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
