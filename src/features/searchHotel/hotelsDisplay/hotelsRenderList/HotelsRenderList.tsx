import React from 'react';
import {useAppSelector} from "../../../../app/store";
import HotelItem from "./hotelItem/HotelItem";

export const HotelsRenderList = () => {
    const hotels = useAppSelector(state => state.searchHotel.hotels)
      return (
        <div style={{overflowY: 'auto', height: '460px', overflowX: 'hidden', whiteSpace: 'nowrap'}}>
            <div style={{marginBottom: '12px'}}>Добавлено в Избранное:X отеля</div>
            <div style={{width: '550px'}}>
                {hotels.map(el =>
                    <HotelItem key={el.hotelId} el={el}/>
                )}
            </div>
        </div>
    );
};

