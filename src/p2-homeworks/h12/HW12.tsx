import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {DifferentColorAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector
    const dispatch = useDispatch();

    const onChangeCallback = (color: string) => {

        dispatch(DifferentColorAC(color))
    };


    return (
        <div className={ `${s[theme]} ${s.wrapper}` } >

            <span className={s[theme + '-text']}>
                homeworks 12
            </span><br/>
            <hr/>
<div className={s.elem}>
    {/*//селект из другой компоненты*/}
            <SuperSelect  options={themes} onChangeOption={onChangeCallback}/>
</div>

        </div>
    );
}

export default HW12;
