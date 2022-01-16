import React from 'react'
import s from './Message.module.css';

type messagePropsType={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.wrapper}>
            <img src={props.avatar}/>
            <div className={s.ugol}></div>
            <div className={s.dialog}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>
        </div>
    )
}

export default Message
