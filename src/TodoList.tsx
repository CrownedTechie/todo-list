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

    useEffect(() => {
        const fetchData = async () => {
            
                const response = await api.get('/todos?limit=5');
                const dummyTodos = response.data?.todos;
                setTodos(dummyTodos); 
            
        }
    
        fetchData();
    }, []);

    

    return ( 
        <>
            {todos.map((todo) => (
                <ListItem key={todo.id} item={todo.todo} />
            ))}
        </>
     );
};
 
export default TodoList;