import React from 'react'
import Message from "./Message";


 export type TaskType = {
    avatar: string
    name: string
    message: string
    time: string
}

export type HomePropsType={
    messageData: Array<TaskType>
}

function HW1(props: HomePropsType) {

    let messageElement=props.messageData.map(el=><Message avatar={el.avatar} name={el.name} message={el.message} time={el.time}/>)
    return (
        <div>
            <hr/>
           <h1> homeworks 1</h1>
            {messageElement}
            <hr/>
        </div>
    )
}

export default HW1
