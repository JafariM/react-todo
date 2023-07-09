import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import style from "./TodoContainer.module.css";

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //url to Airtable
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/`;

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

      // Custom callback function for sorting
      function SortTitle(objectA, objectB) {
        const titleA = objectA.fields.title.toUpperCase();
        const titleB = objectB.fields.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        } else if (titleA === titleB) {
          return 0;
        } else {
          return 1;
        }
      }

      const sortedTodo = data.records.sort(SortTitle);

      const todos = sortedTodo.map((todo) => {
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

      const sortedData = [...todoList, fetchNewTodo];
      // Custom callback function for sorting
      function SortTitle(objectA, objectB) {
        const titleA = objectA.title.toUpperCase();
        const titleB = objectB.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        } else if (titleA === titleB) {
          return 0;
        } else {
          return 1;
        }
      }
      sortedData.sort(SortTitle);
      setTodoList(sortedData);
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
  }, [tableName]);

  return (
    <div>
      <div className={style.picture}></div>
      <AddTodoForm onAddTodo={addTodo} />
      <div className={style.todoList}>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
        {/* <div className={style.footer}>{todoList.length} items left</div> */}
      </div>
    </div>
  );
}

export default TodoContainer;
