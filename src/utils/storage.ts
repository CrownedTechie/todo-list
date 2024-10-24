import { CategoryProps, TodoProps } from "../types";

const STORAGE_KEYS = {
    TODOS: 'todos',
    CATEGORIES: 'categories',
};

export const storage = {
    getTodos: (): TodoProps[] => {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.TODOS) || '[]');
    },
    setTodos: (todos: TodoProps[]) => {
      localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
    },
    getCategories: (): CategoryProps[] => {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || '[]');
    },
    setCategories: (categories: CategoryProps[]) => {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    },
};