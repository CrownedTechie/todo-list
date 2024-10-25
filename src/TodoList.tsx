import { ListItem } from "./components";
import { useTodo } from "./hooks/TodoHook";
import { searchTodos } from "./utils/searchTodos";
import { sortTodos } from "./utils/sortTodos";

const TodoList = ({term}: {term: string}) => {
    const { todos, deleteTodo, markTodoComplete } = useTodo();  // Access todos from custom hook 

    const filteredTodos = searchTodos(todos, term);
    const sortedTodos = sortTodos(filteredTodos);

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