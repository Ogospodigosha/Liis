import {Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './authForm.module.css'
import {validateAuthForm} from "./validateAuthForm";
import {login} from "../authReducer";
import {InputForm} from "../../../components/inputForm/InputForm";
import {Button} from "../../../components/button/Button";
import { PATH } from '../../../pages/Pages';
import { Navigate, useNavigate } from 'react-router-dom';
import {useAppSelector} from "../../../app/store";

export const AuthForm = () => {
    const authInitValues = {login:'', password: ''}
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)

    useEffect(()=>{
        if (localStorage.getItem('isLoggedIn') === 'true') {
            console.log(1)
            navigate('/search-hotel')
        }
    },[])
    if (isLoggedIn) {
        return <Navigate to={PATH["SEARCH-HOTEL"]}/>
    }
    return (
        <>
       <div className={s.div}>
          <h1 className={s.h1}>Simple Hotel Check</h1>

        <Formik
        initialValues={authInitValues}
        validate={validateAuthForm}
        onSubmit={(values, actions) => {
            if (values.login && values.password)
                dispatch(login())
        }}
        >
            <Form>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div style={{ position: 'relative', marginBottom:'24px' }}>
                        <InputForm name={'login'} type={"text"} label={'Логин'}/>
                    </div>
                    <div style={{ position: 'relative',marginBottom:'32px' }}>
                        <InputForm name={'password'} type={"password"} label={'Пароль'}/>
                    </div>
                    <div className={s.submitButton}>
                        <Button title={'Войти'} size={'345px'} />
                    </div>
                </div>
            </Form>
        </Formik>
       </div>
        </>
    );
};

