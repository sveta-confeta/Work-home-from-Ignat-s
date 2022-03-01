import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import s from './HW8.module.css'


export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople);

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp',}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown',}))
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort18',}))

    return (
        <div>
            <hr/>
            homeworks 8

            <div className={s.list}>
                {people.map((p: UserType) => (
                    <div className={s.element} key={p._id}>
                        <div> {p.name}</div>
                        <div>{p.age}</div>
                    </div>))}


            <div className={s.button}>
                <div><button onClick={sortUp}>sort up</button></div>
                <div><button onClick={sortDown}>sort down</button></div>
                <div><button onClick={sort18}> check 18</button></div>
            </div>
            </div>


            <hr/>

        </div>
    )
}

export default HW8
