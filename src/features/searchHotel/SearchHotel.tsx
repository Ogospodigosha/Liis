import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './searchHotel.module.css'
import { Header } from './header/Header';
import {Container} from "../../components/container/Container";
import {Favorites} from "./favorites/Favorites";

import {HotelsDisplay} from "./hotelsDisplay/HotelsDisplay";
import { SearchHotelForm } from './searchHotelForm/SearchHotelForm';
import {ErrorSnackbar} from "../../components/errorSnackBar/ErrorSnackBar";

export const SearchHotel = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if (localStorage.getItem('isLoggedIn') === 'false' || localStorage.getItem('isLoggedIn') === null ) {
            navigate('/login')
        }
    },[])
    return (
        <div className={s.div}>
            <ErrorSnackbar/>
            <Header/>
            <div className={s.container}>
                <div className={s.flex}>
                    <div className={s.firstColumn}>
                        <Container>
                            <SearchHotelForm/>
                        </Container>
                        <Container >
                            <Favorites/>
                        </Container>
                    </div>
                    <div className={s.searchHotel}>
                            <Container size={'664px'}>
                                <HotelsDisplay/>
                            </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

