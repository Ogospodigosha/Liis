import React, {useEffect, useState} from 'react';
import s from './favorites.module.css'
import {useAppSelector} from "../../../app/store";
import HotelItem from "../hotelsDisplay/hotelsRenderList/hotelItem/HotelItem";
import { HotelType} from "../SearchHotelReducer";
import {FavoriteButton} from "../../../components/favoriteButton/FavoriteButton";

export const Favorites = () => {
    const favoriteHotels = useAppSelector(state=> state.searchHotel.favoriteHotels)
    const [sortFavoriteHotels, setSortHotelsFavoriteHotels] = useState<HotelType[]>(favoriteHotels)
    const [active, setActive] = useState(true)
    useEffect(() => {
        setSortHotelsFavoriteHotels(favoriteHotels)
    }, [favoriteHotels])

    const sortRating = (direction: boolean) => {
        direction ? setSortHotelsFavoriteHotels([...favoriteHotels].sort((a, b) => b.priceFrom - a.priceFrom)) :
            setSortHotelsFavoriteHotels([...favoriteHotels].sort((a, b) => a.priceFrom - b.priceFrom))
    }

    const sortPrice = (direction: boolean) => {
        direction ? setSortHotelsFavoriteHotels([...favoriteHotels].sort((a, b) => b.priceFrom - a.priceFrom)) :
            setSortHotelsFavoriteHotels([...favoriteHotels].sort((a, b) => a.priceFrom - b.priceFrom))
    }


    return (
        <div>
            <h2 className={s.header}>Избранное</h2>
            <div className={s.buttons}>
                <div className={s.margin}>
                    <FavoriteButton onClick={sortRating} title={'Рейтинг'} active={true} setActive={setActive}/>
                </div>
                <div>
                    <FavoriteButton onClick={sortPrice} title={'Цена'} active={false} setActive={setActive}/>
                </div>

            </div>
            <div className={s.forBlockHeight}>
                {
                    sortFavoriteHotels.map((el) =>
                        <HotelItem key={el.priceFrom} el={el}/>)
                }
            </div>
        </div>
    );
};

