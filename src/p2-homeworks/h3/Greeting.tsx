import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}



// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${error==='Title is required' ? s.error :s.input}`
    return (
        <div>
            <div className={s.flex}>
            <input placeholder="add name" value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.btn} onClick={addUser}>add</button>
                <span className={s.countName}>count name</span>
            <span className={s.count}>{totalUsers}</span>
            </div>
            <div className={s.errorText}>{error}</div>


        </div>
    )
}

export default Greeting
