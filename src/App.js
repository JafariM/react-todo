import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./components/TodoListItem.module.css";

//NO USE
//define a custom hook to syn todolist and browser local storage
// function useSemiPersistentState() {
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem('savedTodoList') || []) // read initial value of state hook form local storage
//   );
//   //set a side effect hook to save the todolist in browser's local storage
//   React.useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList))
//   }, ['savedTodoList', JSON.stringify(todoList)]); // with stringify we can read the values inside todolist array
//   return [todoList, setTodoList];
// }

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //url to Airtable
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/?view=Grid%20view`;

  //fetching from Air table
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  //add new todo to air table
  const addTodo = async (title) => {
    try {
      const airtableData = {
        fields: {
          title: title,
        },
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify(airtableData),
      });

      if (!response.ok) {
        const message = `Error has ocurred:
                             ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      const fetchNewTodo = {
        id: dataResponse.id,
        title: dataResponse.fields.title,
      };
      setTodoList([...todoList, fetchNewTodo]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  //delete todo from airtable
  const removeTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    try {
      const response = await fetch(`${url}${id}`, options);
      if (!response.ok) {
        const message = `Error has occurred:
        ${response.status}`;
        throw new Error(message);
      }

      const newTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(newTodoList);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact=""
          element={
            <div>
              <div className={style.picture}>
                <h1 className={style.primaryHeader}>Todo</h1>
              </div>
              <AddTodoForm onAddTodo={addTodo} />
              <div className={style.todoList}>
                {isLoading ? (
                  <p>Loading</p>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
              </div>
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
