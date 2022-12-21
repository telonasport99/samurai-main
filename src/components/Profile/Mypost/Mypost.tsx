import React, {ChangeEvent} from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {ProfileProp} from "../Profile";
import {AddPostActionType, OnPostChangeActionType, PostsType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (e:ChangeEvent<HTMLTextAreaElement>) => void
    newPostText: string
}

function Mypost(props: MyPostPropsType) {
    let postElement = props.posts.map(el => <Post key={el.id} likesCount={el.likesCount} id={1} message={el.message}/>)
    let addpost = () => {
            props.addPost()
    }
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>props.updateNewPostText(e)

    return (<div className={s.content}>
            <div>my posts
                <div><textarea onChange={onPostChangeHandler}  value={props.newPostText}/></div>
                <div>
                    <button onClick={addpost}>Add post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default Mypost