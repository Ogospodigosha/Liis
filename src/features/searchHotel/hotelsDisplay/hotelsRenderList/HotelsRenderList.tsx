import React from 'react';
import {useAppSelector} from "../../../../app/store";
import HotelItem from "./hotelItem/HotelItem";
import {v4} from "uuid";

export const HotelsRenderList = () => {
    const hotels = useAppSelector(state => state.searchHotel.hotels)
    const favoriteHotels = useAppSelector(state => state.searchHotel.favoriteHotels)
      return (
        <div style={{overflowY: 'auto', height: '460px', overflowX: 'hidden', whiteSpace: 'nowrap'}}>
            <div style={{marginBottom: '12px'}}>Добавлено в Избранное: {favoriteHotels.length} отелей</div>
            <div style={{width: '550px'}}>
                {hotels.map((el,index) =>
                    <HotelItem key={v4()} el={el} noImage={true}/>
                )}
            </div>
        </div>
    );
};

