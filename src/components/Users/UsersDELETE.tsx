import React from 'react';
import {UsersType} from "../../redux/user-reducer";
import styles from './user.module.css'
import axios from "axios";
type InitialStateType = {
    users:Array<UsersType>
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void
}
let userPhoto = 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
const UsersDELETE = (props:InitialStateType) => {
    let gerUser=()=>{
    if(props.users.length===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
   }
    return (
        <div>
            <button onClick={gerUser}>Get user</button>
            {props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={!u.photoURL ? userPhoto : u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>follow</button>
                            :
                            <button onClick={()=>{props.follow(u.id)}}>unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
{/*
                        <div>{u.location.city}</div><div>{u.location.country}</div>
*/}
                    </span>
                </span>
            </div>)}
        </div>
    );
};

