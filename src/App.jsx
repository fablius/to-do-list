import React, { useState } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./libs/firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default App;
