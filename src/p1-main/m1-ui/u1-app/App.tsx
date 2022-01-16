import React from 'react'
import s from './App.module.css'
import HW2 from "../../../p2-homeworks/h2/HW2";

import HW1, {TaskType} from "../../../p2-homeworks/h1/HW1";

import HW3 from "../../../p2-homeworks/h3/HW3";


function App() {
    const messageData:Array<TaskType> = [
        {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'SVETA',
            message: 'Привет, для меня это было не привычно совмещать компоненты и верстку',
            time: '22:00',
        },
        {
            avatar: 'https://images.chesscomfiles.com/uploads/v1/user/121312644.2ce26a61.1200x1200o.6e0a9d2f52d2.png',
            name: 'Nana',
            message: 'Нужно больше работать!!!',
            time: '22:15',
        },
        {
            avatar: 'https://images.chesscomfiles.com/uploads/v1/user/121312644.2ce26a61.1200x1200o.6e0a9d2f52d2.png',
            name: 'Nana',
            message: 'Летим дальше.вжух-вжух',
            time: '22:1',
        }];

    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1 messageData={messageData} />

            <HW2/>
            <HW3/>
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App
