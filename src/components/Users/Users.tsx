import React from "react";
import {UsersType} from "../../redux/user-reducer";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

let userPhoto = 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingInProgress:(followingInProgress:boolean)=>void
    followingInProgress:boolean
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
                             }}>{ el}</span>
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
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials:true,
                                            headers:{
                                        'API-KEY':'88e747f1-600f-4bbb-8fce-7131a724b96d'}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)
                                    })
                            }}>follow</button>
                            :
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                    {withCredentials:true,
                                        headers:{
                                            'API-KEY':'88e747f1-600f-4bbb-8fce-7131a724b96d'}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)

                                    })
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