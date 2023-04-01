import { useField } from 'formik';
import React from 'react';
import s from './inputForm.module.css'


type PropsType = {
    name: string
    type: string
    label: string
}
export const InputForm:React.FC<PropsType> = ({name, type, label}) => {
    const [field, meta] = useField(name)
    const errorColor = {
        color:meta.touched && meta.error ? '#EB1717': ''
    }
    return (
        <>
            <div className={ s.inputLabel} style={errorColor}>{label}</div>
            <input {...field} style={errorColor}  type={type} />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

