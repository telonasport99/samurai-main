import React from "react";
import {UsersType} from "../../redux/user-reducer";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";

let userPhoto = 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}
let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(el => {
                return <span className={styles.pageNum + ` ${props.currentPage === el && styles.selectedPage}`}
                             onClick={(e) => {
                                 props.onPageChanged(el)
                             }}>{el}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <NavLink to={`/profile/${u.id}`}><img src={!u.photoURL ? userPhoto : u.photoURL}
                                                   className={styles.userPhoto}
                                                   alt={'user-avatar'}/></NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>follow</button>
                            :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>unfollow</button>
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
}
export default Users