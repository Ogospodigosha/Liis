import dayjs from 'dayjs';
import {Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import {searchHotelValidate} from "./searchHotelValidate";
import {InputForm} from "../../../components/inputForm/InputForm";
import s from "../../auth/authForm/authForm.module.css";
import {Button} from "../../../components/button/Button";
import { useDispatch } from 'react-redux';
import {searchDefaultHotel, searchHotel} from "../SearchHotelReducer";
import {useAppSelector} from "../../../app/store";


export const SearchHotelForm = () => {
    const searchHotelInitValues = {location:'Москва', checkIn: dayjs().format('YYYY-MM-DD'), duration:'1'}
    const location = useAppSelector(state => state.searchHotel.location)
    const checkIn = useAppSelector(state => state.searchHotel.checkIn)
    const duration = useAppSelector(state => state.searchHotel.duration)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(searchDefaultHotel(checkIn))
    },[])

    return (
        <>
            <Formik
                initialValues={searchHotelInitValues}
                validate={searchHotelValidate}
                onSubmit={(values, actions) => {
                    debugger
                    if (values.location && values.checkIn && values.duration)
                      dispatch(searchHotel(values.location, values.checkIn, values.duration))
                }}
            >
                <Form>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <InputForm name={'location'} type={"text"} label={'Локация'} size={'296px'} />
                        </div>
                        <div style={{ position: 'relative',marginBottom:'32px' }}>
                            <InputForm name={'checkIn'} type={"date"} label={'Дата заселения'} size={'296px'} />
                        </div>
                        <div style={{ position: 'relative',marginBottom:'32px' }}>
                            <InputForm name={'duration'} type={"number"} label={'Количество дней'} size={'296px'} />
                        </div>
                        <div className={s.submitButton}>
                            <Button title={'Найти'} size={'296px'} />
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

