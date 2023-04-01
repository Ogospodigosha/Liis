import React from 'react';
import s from './auth.module.css'
import {AuthForm} from "./authForm/AuthForm";

export const Auth = () => {
    return (
        <>
        <div className={s.authImage}></div>
        <div className={s.authContainer}>
            <AuthForm/>
        </div>
        </>
    );
};

