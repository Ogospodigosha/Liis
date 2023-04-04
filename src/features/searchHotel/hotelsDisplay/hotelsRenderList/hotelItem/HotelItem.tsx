import React from 'react';
import s from "../hotelsRenderList.module.css";
import {ReactComponent as Home} from "../../../../../svg/home.svg";
import {ReactComponent as Like} from "../../../../../svg/like.svg";
import {getDeclination} from "../../../../../utils/getDeclination";
import {Divider, Rating} from "@mui/material";
import {useAppSelector} from "../../../../../app/store";
import {
    addFavoriteById,
    HotelType,
    removeFavoriteById,
    setLikeHotel
} from "../../../SearchHotelReducer";
import style from './hotelItem.module.css'
import {convertForRuDate} from "../../../../../utils/convertForRuDate";
import {useDispatch} from "react-redux";
type PropsType = {
    el: HotelType
}
const HotelItem:React.FC<PropsType>= ({el}) => {
    const dispatch = useDispatch()
    const favoriteHotels = useAppSelector(state => state.searchHotel.favoriteHotels)
    console.log('favoritehotels тут', favoriteHotels)
    const hotels = useAppSelector(state => state.searchHotel.hotels)
    const duration = useAppSelector(state => state.searchHotel.duration)
    const checkIn = useAppSelector(state => state.searchHotel.checkIn)

    const clickHandler =(hotelId:number)=>{
    let elem =   hotels.find((el)=>el.hotelId === hotelId)
        if (elem && elem.like === undefined || elem && elem.like === false) {
            dispatch(setLikeHotel(hotelId, true))
            dispatch(addFavoriteById(hotelId))
        }else {
            dispatch(setLikeHotel(hotelId, false))
            dispatch(removeFavoriteById(hotelId))
        }
    }

    return (
        <div>
            <div className={s.flex}>
                <div className={s.home} style={{marginRight: '54px'}}>
                    <Home/>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '400px'}}>
                        <div
                            className={s.hotelName}>{el.hotelName.length < 50 ? el.hotelName : el.hotelName.slice(0, 40)}</div>
                         <Like className={style.like} onClick={()=>clickHandler(el.hotelId)} fill={el.like? 'red':'white'}/>

                    </div>
                    <div style={{display: 'flex', width: '163px', justifyContent: 'space-around'}}>
                        <div className={s.date}>{convertForRuDate(checkIn)}</div>
                        <div className={s.date}>-</div>
                        <div className={s.date}> {duration} <span>{getDeclination(duration)}</span></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Rating value={el.stars} readOnly={true}/>
                        <div>Price:<span>{el.priceFrom + '₽'}</span></div>
                    </div>
                </div>

            </div>
            <Divider/>
        </div>

    );
};

export default HotelItem;