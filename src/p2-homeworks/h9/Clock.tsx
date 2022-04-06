import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0) //остановка таймера
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {

            return setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    function addZero(num: number) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const stringTime = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
    const stringDate = addZero(date.getDate()) + ':' + addZero(date.getMonth()) + ':' + addZero(date.getFullYear())

    return (
        <div>
            <div className={s.clocks}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show ? (
                    <div>
                        {stringDate}
                    </div>
                ) : (<br/>)}
                {/*//br-чтобы сохранить место для показывания даты при наведении*/}
            </div>
            <SuperButton className={s.btn} onClick={start}>start</SuperButton>
            <SuperButton className={s.btn} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
