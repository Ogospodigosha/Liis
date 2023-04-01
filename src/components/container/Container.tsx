import React, { ReactNode } from 'react';
import s from './container.module.css'

type PropsType = {
    children: ReactNode
    size?: string
}

export const Container:React.FC<PropsType> = ({children, size='360px'}) => {
    return (
        <div className={s.container} style={{width: size}}>
            {children}
        </div>
    );
};

