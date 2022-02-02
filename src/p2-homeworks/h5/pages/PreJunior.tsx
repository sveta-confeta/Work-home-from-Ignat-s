import React from 'react'
import HW1, {TaskType} from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'

export function PreJunior() {
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
        <div>
            <HW1 messageData={messageData}/>
            <HW2/>
            <HW3/>
            <HW4/>


        </div>
    )
}

