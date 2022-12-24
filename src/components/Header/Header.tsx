import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                  props.login
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;