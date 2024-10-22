import { type ReactNode } from "react";


export type ContainerProps = {
    children: ReactNode
};

export type ButtonProps = {
    children: ReactNode,
    variant: 'filled' | 'outline' | 'primary';
};
