import React from 'react';
import s from './input.module.css'
type PropsType = {
    name: string
    type: string
    label: string
    placeholder:string
}
export const Input:React.FC<PropsType> = ({type, name, label, placeholder}) => {
    return (
        <>
            <div className={s.label}>{label}</div>
            <input  type={type} placeholder={placeholder}  name={name} className={s.input}/>
        </>
    );
};

