import React, { useState } from 'react';
import Login from '../AuthForm/Login/Login';
import s from './NavBar.module.scss';


export const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

    const toggleLogin = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        Мои компоненты
                    </div>
                    <ul className={s.menu}>
                        <li className={s.item} onClick={toggleLogin}>
                            Login
                        </li>
                    </ul>
                </div>
            </header>

            {isOpen && <Login />}
        </>
    )
}