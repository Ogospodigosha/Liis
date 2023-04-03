import dayjs from "dayjs"
import {call, put, takeEvery} from "redux-saga/effects";
import {searchAPi} from "../../api/searchApi";


const initialState = {
    location: 'Москва',
    checkIn: dayjs().format('YYYY-MM-DD'),
    duration: '1',
    hotels: Array<string>
}



export const searchHotelReducer = (state: InitialStateType = initialState, action: ActionsType)=>{
    debugger
    switch (action.type){
        case "searchHotels/SET-DATA-FOR-SEARCH":
            return {...state, location: action.location, checkIn: action.checkIn, duration: action.duration}
        default:
            return state
    }
}
//actions
export const setDataForSearchHotels = (location:string, checkIn:string, duration: string ) => ({type: 'searchHotels/SET-DATA-FOR-SEARCH', location, checkIn, duration} as const)

//types
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setDataForSearchHotels>

//saga

export function* searchHotelSaga(action: ReturnType<typeof searchHotel>){
    debugger
    console.log('DS;FKGMOKGMNEOIGNIJEWNMVAKDSVMKJSA F')
    // @ts-ignore
    const res = yield call(searchAPi.fetchHotels, action.location, action.checkIn, action.duration)
    console.log(res)
    yield put(setDataForSearchHotels(action.location, action.checkIn, action.duration))
}
export const searchHotel = (location:string, checkIn:string, duration: string) => ({type: 'SEARCH-HOTEL/SEARCH-HOTEL', location, checkIn, duration})


export function* searchDefaultHotelSaga(action: ReturnType<typeof searchHotel>){
    debugger
    // @ts-ignore
    const res = yield call(searchAPi.fetchDefaultHotels, action.checkIn)
    console.log(res)
}
export const searchDefaultHotel = ( checkIn:string) => ({type: 'SEARCH-DEFAULT-HOTEL/SEARCH-HOTEL', location, checkIn})


export function* searchWatcher(){
    debugger
    yield takeEvery('SEARCH-DEFAULT-HOTEL/SEARCH-HOTEL',searchDefaultHotelSaga )
    yield takeEvery('SEARCH-HOTEL/SEARCH-HOTEL', searchHotelSaga)
}




