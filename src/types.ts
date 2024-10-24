export interface TodoProps {
    id: number;
    item: string;
    completed?: boolean;
    userId?: number;
    category?: string;
};

export interface CategoryProps {
    id: number;
    name: string;
    color: string;
};