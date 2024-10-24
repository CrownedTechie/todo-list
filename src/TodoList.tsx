import { ListItem } from "./components";
import { useTodo } from "./hooks/TodoHook";

const TodoList = () => {
    const { todos } = useTodo();  // Access todos from context

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