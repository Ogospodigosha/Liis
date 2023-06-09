import { TypedUseSelectorHook, useSelector } from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import {authReducer, authWatcher} from "../features/auth/authReducer";
import {searchHotelReducer,  searchWatcher} from "../features/searchHotel/SearchHotelReducer";
import {all} from "redux-saga/effects";


export const useAppSelector:TypedUseSelectorHook<AppRootState> = useSelector
const rootReducer = combineReducers({
    auth: authReducer,
    searchHotel: searchHotelReducer
})
const sagaMiddleware = createSagaMiddleware()
export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))
export type AppRootState = ReturnType<typeof rootReducer>
sagaMiddleware.run(rootWatcher)
function* rootWatcher(){
    yield all([authWatcher(),searchWatcher() ])

}