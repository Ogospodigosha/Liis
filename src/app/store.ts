import { TypedUseSelectorHook, useSelector } from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from 'redux-saga'


export const useAppSelector:TypedUseSelectorHook<AppRootState> = useSelector
const rootReducer = combineReducers({

})
const sagaMiddleware = createSagaMiddleware()
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))
export type AppRootState = ReturnType<typeof rootReducer>
sagaMiddleware.run(rootWatcher)
function* rootWatcher(){

}