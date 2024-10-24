import { useState } from "react";

export const AddTodoForm = () => {
    // const { addTodo, categories } = useTodos();
    const [todoText, setTodoText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
  
    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   addTodo({
    //     todo: todoText,
    //     completed: false,
    //     userId: 1,
    //     category: selectedCategory || undefined,
    //   });
    //   setTodoText('');
    //   setSelectedCategory('');
    // };
  
    return (
      <form >
        <input
          value={todoText}
        //   onChange={e => setTodoText(e.target.value)}
          placeholder="New todo"
        />
        <select
          value={selectedCategory}
        //   onChange={e => setSelectedCategory(e.value)}
        >
          <option value="">No Category</option>
          {/* {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))} */}
        </select>
        <button type="submit">Add Todo</button>
      </form>
    );
  };