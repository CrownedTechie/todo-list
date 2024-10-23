import { useEffect, useState } from "react";
import { api } from "./api/axios";
import { ListItem } from "./components";

interface TodoProps {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    category?: string;
};

const TodoList = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/todos?limit=2');
                const dummyTodos = response.data?.todos;
                setTodos(dummyTodos); 
            } catch (error) {
                setError('Failed to fetch todos')
            }
        }
    
        fetchData();
    }, []);

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