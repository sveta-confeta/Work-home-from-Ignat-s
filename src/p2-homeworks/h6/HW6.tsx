import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import picture from './edit.png';
import s from './HW6.module.css';

function HW6() {
    const [value, setValue] = useState<string>('') //стейт для инпут

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
       setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <hr/>
            homeworks 6
            <div className={s.flex}>
                <img className={s.img} src={picture}/>

                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton className={s.btn1} onClick={save}>save</SuperButton>
                <SuperButton className={s.btn2} onClick={restore}>restore</SuperButton>
            </div>
        </div>
    )
}

export default HW6
