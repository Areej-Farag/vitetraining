import { configureStore } from "@reduxjs/toolkit";
import  TodosReducer  from "./slices/TodoSlice";
export const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});
