import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logout} from "../auth/authReducer";
import {useAppSelector} from "../../app/store";
import s from './searchHotel.module.css'
import { Header } from './header/Header';

export const SearchHotel = () => {
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)
    useEffect(()=>{
        if (localStorage.getItem('isLoggedIn') === 'false' || localStorage.getItem('isLoggedIn') === null ) {
            navigate('/login')
        }
    },[])
    return (
        <div className={s.div}>
            <Header/>
        </div>
    );
};

