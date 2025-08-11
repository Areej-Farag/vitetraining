import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: false },
  ],
  isloading: false,
  error: null,
};
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (todo) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title: todo, completed: false, id: Date.now() }
    );
    return response.data;
  }
);

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isloading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });

    builder
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos = [action.payload, ...state.todos];
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addTodo, removeTodo, toggleComplete, editTodo } =
  TodosSlice.actions;
export default TodosSlice.reducer;
