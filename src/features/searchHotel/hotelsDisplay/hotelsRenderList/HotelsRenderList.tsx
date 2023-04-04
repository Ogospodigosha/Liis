import React from 'react';
import {useAppSelector} from "../../../../app/store";
import HotelItem from "./hotelItem/HotelItem";
import {v4} from "uuid";
import s from './hotelsRenderList.module.css'
export const HotelsRenderList = () => {
    const hotels = useAppSelector(state => state.searchHotel.hotels)
    const favoriteHotels = useAppSelector(state => state.searchHotel.favoriteHotels)
      return (
        <div className={s.forHeight}>
            <div className={s.margin}>Добавлено в Избранное: {favoriteHotels.length} отелей</div>
            <div className={s.width}>
                {hotels.map((el,index) =>
                    <HotelItem key={v4()} el={el} noImage={true}/>
                )}
            </div>
        </div>
    );
};

