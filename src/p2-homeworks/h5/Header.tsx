import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './HW5.module.css';
import picture from './add.png'



function Header() {
    return (

        <ul className={s.headerList}>
           <li className={s.item}><NavLink to={"/junior"} className={classHeaderList=>classHeaderList.isActive ? s.active : ' '}> Junior </NavLink></li>
            <li className={s.item}><NavLink to={"/junior-plus"} className={classHeaderList=>classHeaderList.isActive ? s.active : ' '}> JuniorPlus </NavLink></li>
            <li className={s.item}><NavLink to={"/pre-junior"} className={classHeaderList=>classHeaderList.isActive ? s.active : ' '}> PreJunior </NavLink></li>

            <img className={s.plus} src={picture}/>
        </ul>

    )
}

export default Header
