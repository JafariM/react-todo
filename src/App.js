import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";

function App() {
  const tableName = process.env.REACT_APP_TABLE_NAME;
  return (
    <BrowserRouter>
      <Navbar tableName={tableName} />
      <Routes>
        <Route path="/" exact="" element={<Home />}></Route>
        <Route
          path="/todo"
          element={<TodoContainer tableName={tableName} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
