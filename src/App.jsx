import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookAuth from "./components/LogInFacebook";
import {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
  fetchTodos,
  addTodoAsync,
} from "./redux/slices/TodoSlice";
export default function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  // const [todo, setTodo] = React.useState({});
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>

      <FacebookAuth />

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              marginRight: "10px",
              width: "100%",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <button
            onClick={() => {
              dispatch(addTodoAsync(title));
              setTitle("");
            }}
          >
            add
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {todos.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px auto",
                width: "90%",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleComplete(todo.id))}
                />{" "}
                <span>{todo.title}</span>
              </div>
              <div>
                <button>edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
