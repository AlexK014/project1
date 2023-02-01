import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <NavLink to={'/profile'}>ПРОФИЛЬ</NavLink>
                
            </div>
            <div>
                <NavLink to={'/dialogs'}>СООБЩЕНИЯ</NavLink>
            </div>
            <div>
                ПОЛЬЗОВАТЕЛИ
            </div>
            <div>
                НОВОСТИ
            </div>
        </nav>
    )
}

export default Navbar