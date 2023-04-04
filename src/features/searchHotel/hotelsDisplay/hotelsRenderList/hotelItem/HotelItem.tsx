import React from 'react';
import s from "../hotelsRenderList.module.css";
import {ReactComponent as Home} from "../../../../../svg/home.svg";
import {ReactComponent as Like} from "../../../../../svg/like.svg";
import {getDeclination} from "../../../../../utils/getDeclination";
import {Divider, Rating} from "@mui/material";
import { useAppSelector} from "../../../../../app/store";
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
    noImage?: boolean

}
const HotelItem:React.FC<PropsType>= ({el, noImage }) => {
    const dispatch = useDispatch()
    const duration = useAppSelector(state => state.searchHotel.duration)
    const checkIn = useAppSelector(state => state.searchHotel.checkIn)
    const clickHandler =(el:HotelType,)=>{
        debugger
        if (el.like) {
            dispatch(setLikeHotel(el.hotelId, false))
            dispatch(removeFavoriteById(el.priceFrom))
        }else {
            dispatch(setLikeHotel(el.hotelId, true))
            dispatch(addFavoriteById({...el,duration:duration,like:true,checkIn:convertForRuDate(checkIn) }))
        }
    }

    return (
        <div>
            <div className={s.flex}>
                {!noImage ? null :  <div className={s.home} style={{marginRight: '54px'}}>
                    <Home/>
                </div>}

                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: !noImage? '270px':'400px'}}>
                        <div
                            className={s.hotelName}>{el.hotelName.length < 50 ? el.hotelName : el.hotelName.slice(0, 40)}</div>
                         <Like className={style.like} onClick={()=>clickHandler(el)} fill={el.like? 'red':'white'}/>

                    </div>
                    <div style={{display: 'flex', width: '163px', justifyContent: 'space-around'}}>
                        {!noImage ? <div className={s.date}>{el.checkIn}</div> :<div className={s.date}>{convertForRuDate(checkIn)}</div>}
                        <div className={s.date}>-</div>
                        {!noImage ?
                            <div className={s.date}> {el.duration} <span>{getDeclination(el.duration)}</span></div>
                            :<div className={s.date}> {duration} <span>{getDeclination(duration)}</span></div>
                        }
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