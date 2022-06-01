import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css';
import {CheckboxValueAC, postValueThunkCreator} from "./checkboxReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import loader from "../h10/img/loader.svg";

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const text=useSelector<AppStoreType,string>(state=>state.checkboxValue.text);
    const loading=useSelector<AppStoreType,boolean>(state=>state.loading.loading);

    const dispatch = useDispatch<ThunkDispatch<AppStoreType, any, AnyAction>>();

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    const btnHandler = () => {
        dispatch(postValueThunkCreator(checked))
    }

    const checkHandler=(checked:boolean)=>{
    dispatch(CheckboxValueAC(checked))
    }
    return (
        <div>
            <SuperButton onClick={btnHandler} className={s.btn}>Получить значение </SuperButton>
            <SuperCheckbox onChange={testOnChange} checked={checked}/>
            {loading
                ? <img alt={'крутилка'} src={loader}/>
                :
            <div>
                {text}
            </div> }


        </div>
    );
};

