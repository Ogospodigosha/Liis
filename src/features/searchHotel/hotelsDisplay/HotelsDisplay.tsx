import React from 'react';
import {Breadcrumbs} from "./breadcrumbs/Breadcrumbs";
import {Carousel} from "./Carousel/Carousel";
import {HotelsRenderList} from "./hotelsRenderList/HotelsRenderList";

export const HotelsDisplay = () => {
    return (
        <div>
            <Breadcrumbs/>
            <Carousel/>
            <HotelsRenderList/>
        </div>
    );
};

