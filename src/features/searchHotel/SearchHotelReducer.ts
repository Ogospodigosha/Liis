import dayjs from "dayjs"
import {call, put, takeEvery} from "redux-saga/effects";
import {searchAPi} from "../../api/searchApi";
import {AxiosError, AxiosResponse} from "axios";


const initialState = {
    location: 'Москва',
    checkIn: dayjs().format('YYYY-MM-DD'),
    duration: '1',
    hotels: [] as HotelType[],
    carouselImage: [
        './img/carousel1.jpg',
        './img/carousel2.jpg',
        './img/carousel3.jpg',
        './img/carousel4.jpg',
        './img/carousel5.jpg'
    ],
    favoriteHotels: [] as HotelType[],
    error: null as RequestErrorType,

}
export type RequestErrorType = null | string
export type HotelType = {
    hotelId: number
    stars: number
    hotelName: string
    priceFrom: number
    like: boolean
    duration: string
    checkIn: string
}


export const searchHotelReducer = (state: InitialStateType = initialState, action: ActionsType)=>{
    switch (action.type){
        case "searchHotels/SET-DATA-FOR-SEARCH":
            return {...state, location: action.location, checkIn: action.checkIn, duration: action.duration}
        case "searchHotels/SET-HOTELS":
            return  {...state, hotels: action.hotels.map(hot => {
                hot.like = state.favoriteHotels.some(h => `${h.hotelId}${h.priceFrom}` === `${hot.hotelId}${hot.priceFrom}`);
                return hot
            })}
        case "searchHotels/SET-LIKE-HOTEL":
            return {...state, hotels: state.hotels.map(el => el.hotelId === action.hotelId ? {...el, like: action.like }: el)}
        case "searchHotels/ADD-FAVORITES-BY-ID":
            return {...state, favoriteHotels: [...state.favoriteHotels, action.newObject]}
        case "searchHotels/REMOVE-FAVORITES-BY-ID":
            return {...state, favoriteHotels: state.favoriteHotels.filter(el => el.priceFrom !== action.priceFrom)}
        case "searchHotels/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}
//actions
export const setDataForSearchHotels = (location:string, checkIn:string, duration: string ) => ({type: 'searchHotels/SET-DATA-FOR-SEARCH', location, checkIn, duration} as const)
export const setHotels =(hotels: HotelType[])=>({type: 'searchHotels/SET-HOTELS',hotels } as const)
export const setLikeHotel = (hotelId:number, like: boolean)=>({type: 'searchHotels/SET-LIKE-HOTEL', hotelId, like}as const)
export const addFavoriteById=(newObject:any)=>({type :'searchHotels/ADD-FAVORITES-BY-ID', newObject}as const)
export const removeFavoriteById=(priceFrom:number)=>({type :'searchHotels/REMOVE-FAVORITES-BY-ID', priceFrom}as const)
export const setSearchHotelsError = (error: string | null) => ({ type: 'searchHotels/SET-ERROR', error } as const)
//types
type InitialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof setDataForSearchHotels>
    | ReturnType<typeof setHotels>
    | ReturnType<typeof setLikeHotel>
    |  ReturnType<typeof addFavoriteById>
    |  ReturnType<typeof removeFavoriteById>
    |  ReturnType<typeof setSearchHotelsError>

//saga

export function* searchHotelSaga(action: ReturnType<typeof searchHotel>){
    try {
        const res:AxiosResponse<HotelType[]> = yield call(searchAPi.fetchHotels, action.location, action.checkIn, action.duration)
        if (res.status === 200) {
            yield put(setDataForSearchHotels(action.location, action.checkIn, action.duration))
            yield put (setHotels(res.data))
        } else {
            throw new Error(res.statusText);
        }
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        yield put (setSearchHotelsError(err.message))
    }


}
export const searchHotel = (location:string, checkIn:string, duration: string) => ({type: 'SEARCH-HOTEL/SEARCH-HOTEL', location, checkIn, duration})


export function* searchDefaultHotelSaga(action: ReturnType<typeof searchHotel>){
    const res:AxiosResponse<HotelType[]> = yield call(searchAPi.fetchDefaultHotels, action.checkIn)
    yield put (setHotels(res.data))
}
export const searchDefaultHotel = ( checkIn:string) => ({type: 'SEARCH-DEFAULT-HOTEL/SEARCH-HOTEL', checkIn})




export function* searchWatcher(){
    yield takeEvery('SEARCH-DEFAULT-HOTEL/SEARCH-HOTEL',searchDefaultHotelSaga )
    yield takeEvery('SEARCH-HOTEL/SEARCH-HOTEL', searchHotelSaga)
}




