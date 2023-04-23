import React from "react";
import {UsersType} from "../../redux/user-reducer";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

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
    return <div>
   <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUserCount={props.totalUserCount} pageSize={props.pageSize}/>
        {props.users.map(u => <User user={u}key={u.id} followingInProgress={props.followingInProgress} follow={props.follow}
                                    unFollow={props.unFollow}
         />)}
    </div>
}
export default Users