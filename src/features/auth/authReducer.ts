import {put, takeEvery} from "redux-saga/effects";

const initialState = {
    isLoggedIn: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type){
        case "auth/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}
//actions
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'auth/SET-IS-LOGGED-IN', isLoggedIn} as const)


//types
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoggedIn>

//saga
export function* loginSaga(){
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
    yield put(setIsLoggedIn(true))
}
export const login = ()=>({type:'AUTH/LOGIN'})
export function* logoutSaga(){
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
    yield put(setIsLoggedIn(false))
}
export const logout = ()=>({type:'AUTH/LOGOUT'})

export function* authWatcher(){
    yield takeEvery('AUTH/LOGIN', loginSaga)
    yield takeEvery('AUTH/LOGOUT', logoutSaga)
}