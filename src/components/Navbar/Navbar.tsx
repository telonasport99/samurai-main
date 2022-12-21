import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={cl.nav}>
            <div><NavLink activeClassName={cl.active} to='/profile' >Profile</NavLink></div>
            <div><NavLink activeClassName={cl.active} to='/dialogs'>Messages</NavLink></div>
            <div> <NavLink activeClassName={cl.active} to='/news'>News</NavLink></div>
            <div><NavLink activeClassName={cl.active} to='/music'>Music</NavLink></div>
            <div><NavLink activeClassName={cl.active} to='/settings'>Setting</NavLink></div>
            <div><NavLink activeClassName={cl.active} to='/users'>Users</NavLink></div>

        </nav>
    )
}

export default Navbar