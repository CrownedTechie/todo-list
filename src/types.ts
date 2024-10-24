export interface TodoProps {
    id: number;
    todo: string;
    completed?: boolean;
    userId?: number;
    category?: string;
};

export interface CategoryProps {
    id: number;
    name: string;
    color: string;
};