import { ListItem } from "./components";
import { useTodo } from "./hooks/TodoHook";

const TodoList = () => {
    const { todos, deleteTodo, markTodoComplete } = useTodo();  // Access todos from context

    const sortedTodos = [...todos].sort((a, b) => a.completed ? 1 : -1);

    return ( 
        <>
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                todos.map((todo) => (
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