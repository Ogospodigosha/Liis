import React, { useState } from 'react';
import s from './favoritesButton.module.css'
import {ReactComponent as ArrowTop} from '../../svg/arrowTop.svg'
import {ReactComponent as ArrowBottom} from '../../svg/arrowBottom.svg'



type PropsType = {
    title: string
    active: boolean
    setActive: (active: boolean)=>void

}
export const FavoritesButton:React.FC<PropsType> = ({title, active, setActive}) => {

    const [activeArrow, setActiveArrow] = useState(true)
    const clickHandler = ()=>{
        debugger
        setActiveArrow(prev =>!prev)
        if (active === false) {
            // @ts-ignore
            setActive(prev => !prev)
        }

    }
    return (
            <div style={{display:'flex', alignItems:'center', color: active ? '#41522E' :'#E5E5E5',  border: active? '1px solid #41522E': '1px solid #E5E5E5', width:'89px', borderRadius:'4px', marginRight:'8px', justifyContent:'space-around', cursor: 'pointer' }}
            onClick={clickHandler}
            >
                <div className={s.button}>{title}</div>
                <div className={s.arrow}>
                    <ArrowTop fill={active && activeArrow? "#41522E": "#E5E5E5"}/>
                    <ArrowBottom fill={active && !activeArrow ? "#41522E": "#E5E5E5"}/>
                </div>
            </div>
    );
};

