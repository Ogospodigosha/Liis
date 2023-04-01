import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import {Auth} from "../features/auth/Auth";
import {SearchHotel} from "../features/searchHotel/SearchHotel";

export const PATH = {
    LOGIN: '/login',
    ['SEARCH-HOTEL']: '/search-hotel'
}

export const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.LOGIN} />} />
            <Route path={PATH.LOGIN} element={<Auth />} />
            <Route path={PATH['SEARCH-HOTEL']} element={<SearchHotel/>} />
            <Route path={'*'} element={<div>Page not found</div>} />
        </Routes>
    );
};

