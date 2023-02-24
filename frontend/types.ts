import { ReactNode } from "react";

//product list types
export interface Products{
    edges: any[],
    pageInfo: {
        hasPreviousPage:boolean, 
        hasNextPage:boolean
    } 
}

//menu items type
export interface MenuItems{
    active:boolean,
    text:string,
    url:string
}

//button type
export interface ButtonProps {
    title?: string;
    action?: () => void;
    children?:ReactNode
}

export interface IconsProps {
    action?: () => void;
    next?:boolean
    is_active?:boolean
}