import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{'_id':v1(),name:name}, ...users]) ;
    }

    return (
        <div>
            <hr/>
            <h1>homeworks 3</h1>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>


        </div>
    )
}

export default HW3
