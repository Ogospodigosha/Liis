import dayjs from 'dayjs';
import { useField } from 'formik';
import React from 'react';
import s from './inputForm.module.css'


type PropsType = {
    name: string
    type: string
    label: string
    size?: string
}
export const InputForm:React.FC<PropsType> = ({name, type, label, size}) => {
    const [field, meta] = useField(name)
    const errorColor = {
        color:meta.touched && meta.error ? '#EB1717': '',
        width:size
    }
    return (
        <>
            <div className={ s.inputLabel} style={errorColor} >{label}</div>
            <input {...field} style={errorColor}  type={type} min={type === 'date' ? dayjs().format('YYYY-MM-DD'): ''} />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

