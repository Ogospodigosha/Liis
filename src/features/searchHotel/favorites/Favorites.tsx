import React, { useState } from 'react';
import s from './favorites.module.css'
import {FavoritesButton} from "../../../components/favoritesButton/FavoritesButton";
import {useAppSelector} from "../../../app/store";
import HotelItem from "../hotelsDisplay/hotelsRenderList/hotelItem/HotelItem";
export const Favorites = () => {
    const [active, setActive] = useState(true)
    const favoriteHotels = useAppSelector(state=> state.searchHotel.favoriteHotels)
    console.log(favoriteHotels)
    return (
        <div>
            <h2 className={s.header}>Избранное</h2>
            <div style={{display: 'flex', cursor:'pointer', marginBottom: '32px'}}>
                <FavoritesButton title={'Рейтинг'} active={active} setActive={setActive}/>
                <FavoritesButton title={'Цена'} active={!active} setActive={setActive} />
            </div>
            <div style={{overflowY: 'auto', height: '130px', overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                {
                    favoriteHotels.map((el, index) =>
                        <HotelItem key={el.priceFrom} el={el}/>)
                }
            </div>
        </div>
    );
};

