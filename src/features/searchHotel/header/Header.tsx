import React from 'react';
import { useDispatch } from 'react-redux';
import logoutSvg from '../../../svg/logout.svg'
import s from './header.module.css'
import {logout} from "../../auth/authReducer";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const clickHandler =()=>{
        dispatch(logout())
        navigate('/login')
    }
    return (
        <div className={s.flex}>
            <div className={s.header}>Simple Hotel Check</div>
            <div className={s.logoutFlex} onClick={clickHandler}>
                <div className={s.logout}>Выйти</div>
                <img src={logoutSvg}/>
            </div>
        </div>
    );
};

