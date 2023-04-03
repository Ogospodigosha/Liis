import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {DragEvent} from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import {useAppSelector} from "../../../../app/store";
export const Carousel:React.FC = () => {
    const images = useAppSelector(state => state.searchHotel.carouselImage)
    const handleDragStart = (e: DragEvent<HTMLImageElement>) => e.preventDefault();
    const imageItems = images.map((el, index) =><img key={index} src={el} onDragStart={handleDragStart} />)

    const responsive = {
        0: {
            items: 4,
        }
    };

    return (
        <div>
            <AliceCarousel items={imageItems}  responsive={responsive}  mouseTracking disableDotsControls disableButtonsControls  />
        </div>
    );
};

