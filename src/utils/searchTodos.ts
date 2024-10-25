import { TodoProps } from "../types";

//* This function helps to search for todos
export const searchTodos = (todos: TodoProps[], term: string) => {
    const filteredTodos = todos.filter(todo => 
        todo.item.toLowerCase().includes(term));
    return filteredTodos
};