import { TodoProps } from "../types";

//* This function is to sort the todos, so that the completed items are moved to the bottom
export const sortTodos = (todos: TodoProps[]) => {
  return [...todos].sort((a) => a.completed ? 1 : -1);
};
