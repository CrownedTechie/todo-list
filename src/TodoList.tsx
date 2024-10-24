import { useEffect, useState } from "react";
import { api } from "./api/axios";
import { ListItem } from "./components";
import { TodoProps } from "./types";
import { storage } from "./utils/storage";

const TodoList = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    //* Fetching the todos from the api and catching error
    useEffect(() => {
        const localTodos = storage.getTodos();

        if (localTodos.length > 0) {
            setTodos(localTodos);
        } else {
            const fetchData = async () => {
                try {
                    const response = await api.get('/todos?limit=2');
                    const dummyTodos = response.data?.todos;
                    setTodos(dummyTodos); 
                } catch (error) {
                    setError('Failed to fetch todos')
                    console.error(error)
                }
            }
            fetchData();
        }
        

    }, []);

    //* Handling error 
    if (error) return <h1>{error}</h1>

    return ( 
        <>
            {todos.map((todo) => (
                <ListItem key={todo.id} item={todo.todo} />
            ))}
        </>
     );
};
 
export default TodoList;