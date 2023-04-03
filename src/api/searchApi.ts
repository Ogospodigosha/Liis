import axios from "axios";
import dayjs from "dayjs";




const instance = axios.create ({
    baseURL: 'https://engine.hotellook.com/api/v2'
})

export const searchAPi={
    fetchHotels(location: string, checkIn: string, duration: string){
        const checkOut = dayjs(checkIn).add(+duration, 'day').format('YYYY-MM-DD');
        return instance.get(`cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    },
    fetchDefaultHotels(checkIn:string){
        const checkOut = dayjs(checkIn).add(1, 'day').format('YYYY-MM-DD');
        return instance.get(`cache.json?location='Москва'&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    }
}