import React, {useState} from 'react';
import s from './favoriteButton.module.css'
import {ReactComponent as ArrowTop} from '../../svg/arrowTop.svg'
import {ReactComponent as ArrowBottom} from '../../svg/arrowBottom.svg'
interface Props {
    title: string
    onClick: (type: boolean) => void
    active: boolean
    setActive:(active:boolean)=>void
}

export const FavoriteButton: React.FC<Props>= ({title, onClick}) => {
    const [direction, setDirection] = useState(true)
    const changeDirection = () => {
        onClick(direction)
        setDirection(!direction)
    }
    return (
        <div onClick={changeDirection} className={s.sorter} >
            <div className={s.title}>{title}</div>
            <div className={s.arrow}>
                <ArrowTop fillOpacity={direction ? '0.3' : ''} />
                <ArrowBottom fillOpacity={!direction ? '0.3' : ''}/>
            </div>
        </div>
    )
}
