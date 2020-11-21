import React, { useState } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
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
                            Вход
                        </li>
                    </ul>
                </div>
            </header>

            {isOpen && <AuthForm />}
        </>
    )
}