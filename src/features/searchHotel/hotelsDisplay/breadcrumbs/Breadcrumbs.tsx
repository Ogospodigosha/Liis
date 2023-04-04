import React from 'react';
import s from './breadcrumbs.module.css'
import {useAppSelector} from "../../../../app/store";
import arrowRight from '../../../../svg/arrowRight.svg'
import {convertForRuDate} from "../../../../utils/convertForRuDate";

export const Breadcrumbs = () => {
    const location = useAppSelector(state => state.searchHotel.location)
    const checkIn = useAppSelector(state => state.searchHotel.checkIn)
    return (
        <div className={s.flex}>
            <div className={s.flexBreadcrumbs}>
                <div className={s.header}>Отели</div>
                <img className={s.img} src={arrowRight} width={'8px'} height={'18px'}/>
                <div className={s.header}>{location}</div>
            </div>
            <div className={s.day}>{convertForRuDate(checkIn)}</div>
        </div>
    );
};

