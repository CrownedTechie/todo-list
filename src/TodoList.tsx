import {  useContext } from "react";
import { ListItem } from "./components";
import { TodoContext } from "./context/TodoContext";

const TodoList = () => {
    const { todos } = useContext(TodoContext);  // Access todos from context

    return ( 
        <>
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                todos.map((todo) => (
                <ListItem key={todo.id} item={todo.item} />
                ))
            )}
        </>
     );
};
 
export default TodoList;