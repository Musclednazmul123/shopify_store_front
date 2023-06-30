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
    title?: string,
    action?: () => void,
    children?:ReactNode,
    classes?:String
}

export interface IconsProps {
    action?: () => void,
    next?:boolean,
    is_active?:boolean
}

export interface Post{
    cartCreate?:any,
    url:string,
    data?:any,
    cart?:any,
    body?:any,
    id:any
}

export interface SliderTypes{
    children:ReactNode,
    settings: {
        dots?: boolean,
        className: string,
        centerPadding: string,
        centerMode: boolean,
        infinite?: boolean,
        speed?: number,
        slidesToShow?: number,
        slidesToScroll?: number,
        responsive?: any[]
      };
}

export interface ProductDetailsType{
    id: String,
    amount?:String,
    currency?:String,
    description?:String,
    title:String,
    variants?: any
}

export interface HeroType{
    title?: String,
    subtitle?: String,
    description?:String, 
    img?:String, 
    url?:String,
    video?:String,
    btn?:String
}

export interface IconCardType{
    iconsrc?: String, 
    title: String, 
    description?: String, 
    scheme?:String,
    titleTop?:Boolean
}
