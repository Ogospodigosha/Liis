import {Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './authForm.module.css'
import {validateAuthForm} from "./validateAuthForm";
import {login} from "../authReducer";
import {InputForm} from "../../../components/inputForm/InputForm";
import {Button} from "../../../components/button/Button";
export const AuthForm = () => {
    const authInitValues = {login:'', password: ''}
    const dispatch = useDispatch()
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
                        {/*<button>Войти</button>*/}
                        <Button title={'Войти'} size={'345px'}/>
                    </div>
                </div>
            </Form>
        </Formik>
       </div>
        </>
    );
};

