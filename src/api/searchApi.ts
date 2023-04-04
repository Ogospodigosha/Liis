import axios, {AxiosResponse} from "axios";
import dayjs from "dayjs";
import {HotelType} from "../features/searchHotel/SearchHotelReducer";




const instance = axios.create ({
    baseURL: 'https://engine.hotellook.com/api/v2'
})

export const searchAPi={
    fetchHotels(location: string, checkIn: string, duration: string): Promise<AxiosResponse<HotelType[]>>  {
        const checkOut = dayjs(checkIn).add(+duration, 'day').format('YYYY-MM-DD');
        return instance.get<HotelType[]>(`cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    },
    fetchDefaultHotels(checkIn:string): Promise<AxiosResponse<HotelType[]>> {
        const checkOut = dayjs(checkIn).add(1, 'day').format('YYYY-MM-DD');
        return instance.get<HotelType[]>(`cache.json?location='Москва'&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    }
}
