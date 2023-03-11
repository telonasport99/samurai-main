import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    logout:()=>void
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div> {props.login}-<button onClick={()=>props.logout()}>Log out</button></div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;