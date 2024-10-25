import { ListItem } from "./components";
import { useTodo } from "./hooks/TodoHook";
import { sortTodos } from "./utils/sortTodos";

const TodoList = () => {
    const { todos, deleteTodo, markTodoComplete } = useTodo();  // Access todos from context

    const sortedTodos = sortTodos(todos);

    return ( 
        <>
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                sortedTodos.map((todo) => (
                    <ListItem 
                        key={todo.id} 
                        item={todo.item} 
                        isComplete={todo.completed}
                        handleDelete={() => deleteTodo(todo.id)} 
                        handleComplete={() => markTodoComplete(todo.id)}
                    />
                ))
            )}
        </>
     );
};
 
export default TodoList;