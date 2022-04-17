import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import loader from './img/loader.svg';
import s from './bll/loading.module.css'

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType,boolean>(state => state.loading.loading)


    const setLoading = () => {
         dispatch(loadingAC(true));

        const anLoading = () => {
            return  dispatch(loadingAC(false));
        }

        setTimeout(anLoading, 2000);
    };





    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? <img src={loader}/>
                 :
                    <div>
                        <SuperButton className={s.btn} onClick={setLoading}>set loading...</SuperButton>
                    </div>

            }

            <hr/>

        </div>
    )
}

export default HW10
