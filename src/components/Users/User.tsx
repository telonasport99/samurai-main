import React from "react";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress,unFollow,follow}:any) => {
    let userPhoto = 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
    return (
        <div>
        <span>
                    <div>
                    <NavLink to={`/profile/${user.id}`}><img src={!user.photoURL ? userPhoto : user.photoURL}
                                                          className={styles.userPhoto}
                                                          alt={'user-avatar'}/></NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress} onClick={() => {
                                unFollow(user.id)
                            }}>unfollow</button>
                            :
                            <button disabled={followingInProgress} onClick={() => {
                                follow(user.id)
                            }}>follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                    {/*<span>*/}
                    {/*    <div>{user.location.city}</div><div>{user.location.country}</div>*/}
                    {/*</span>*/}
                </span>
        </div>)
}
export default User