import React from 'react';
import s from './breadcrumbs.module.css'
import {useAppSelector} from "../../../../app/store";
import arrowRight from '../../../../svg/arrowRight.svg'

export const Breadcrumbs = () => {
    const location = useAppSelector(state => state.searchHotel.location)
    const checkIn = useAppSelector(state => state.searchHotel.checkIn)
    let date = new Date(checkIn)
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    // @ts-ignore
    let newDate = date.toLocaleString("ru", options).slice(0, -3);
    console.log(date)
    return (
        <div className={s.flex}>
            <div className={s.flexBreadcrumbs}>
                <div className={s.header}>Отели</div>
                <img className={s.img} src={arrowRight} width={'8px'} height={'18px'}/>
                <div className={s.header}>{location}</div>
            </div>
            <div className={s.day}>{newDate}</div>
        </div>
    );
};

