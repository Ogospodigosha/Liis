import React from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import {useAppSelector} from "./app/store";
import {login, logout} from "./features/auth/authReducer";

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useAppSelector(state=>state.auth.isLoggedIn)
  console.log(localStorage.getItem('isLoggedIn'))
  console.log("ISLOGGEDIN", isLoggedIn)
  const handlerClick = ()=>{
    dispatch(login())
  }
  const  handlerClickFalse = () =>{
    dispatch(logout())
  }
  return (
    <div className="App">
        <button onClick={handlerClick}>change isLoggedIn</button>
        <button onClick={handlerClickFalse}>change isLoggedIn false</button>

    </div>
  );
}

export default App;
