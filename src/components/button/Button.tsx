import React from 'react';
import s from './button.module.css'

type PropsType = {
    title: string
    size: string
}

export const Button:React.FC<PropsType> = ({title, size}) => {

    return (
       <button  className={s.button} style={{width: size}} >{title}</button>
    );
};
