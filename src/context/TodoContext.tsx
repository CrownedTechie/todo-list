import { createContext, useEffect, useState, type ReactNode } from "react";
import { TodoProps } from "../types";
import { storage } from "../utils/storage";

interface TodoContextProps {
    todos: TodoProps[];
    addTodo: (newTodo: TodoProps) => void;
    deleteTodo: (id: number ) => void;
}

// Create a context with default values
export const TodoContext = createContext<TodoContextProps | undefined>(undefined);


export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoProps[]>([]);

    // Function to add a new todo
    const addTodo = (newTodo: TodoProps) => {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      storage.setTodos(updatedTodos); // Save to local storage
    };

    // Function to get new todo that runs when the component mounts
    useEffect(() => {
        const getTodo = () => {
            const localTodos = storage.getTodos();
            setTodos(localTodos);
        }; 
        
        getTodo();
    }, [])

    // Function to delete a todo 
    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        storage.setTodos(updatedTodos);
        setTodos(updatedTodos);
    };
    
    return ( 
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};