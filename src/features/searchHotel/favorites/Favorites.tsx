import React, { useState } from 'react';
import s from './favorites.module.css'
import {FavoritesButton} from "../../../components/favoritesButton/FavoritesButton";
export const Favorites = () => {
    const [active, setActive] = useState(true)
    return (
        <div>
            <h2 className={s.header}>Избранное</h2>
            <div style={{display: 'flex', cursor:'pointer'}}>
                <FavoritesButton title={'Рейтинг'} active={active} setActive={setActive}/>
                <FavoritesButton title={'Цена'} active={!active} setActive={setActive} />
            </div>
        </div>
    );
};

