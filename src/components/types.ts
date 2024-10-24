import { type ReactNode } from "react";


export type ContainerProps = {
    children: ReactNode
};

export type ButtonProps = {
    children: ReactNode,
    variant: 'filled' | 'outline' | 'primary';
    handleClick?: () => void;
};

export type ListItemProps = {
    item: string;
    isComplete: boolean;
    handleDelete: () => void;
    handleComplete: () => void;
};

export interface ModalProps {
    isModal: boolean
};