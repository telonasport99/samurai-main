import React, {ChangeEvent} from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import profile, {ProfileProp} from "../Profile";
import {AddPostActionType, OnPostChangeActionType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

/*function MypostContainer() {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>
                    store.dispatch(onPostChangeActionCreator(e.currentTarget.value))
                return <Mypost updateNewPostText={onPostChangeHandler}
                        addPost={addPost}
                        posts={store._state.profilePage.posts}
                        newPostText={store._state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}*/
const mapStateToProps = (state:ReduxStateType)=>{
   return {
        posts:state.profilePage.posts,
       newPostText:state.profilePage.newPostText
   }
   }

   type MapDispatchToProps = {
       updateNewPostText:(e:ChangeEvent<HTMLTextAreaElement>)=>void
       addPost:() =>void
   }
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps=>{
    return{
        updateNewPostText:(e:ChangeEvent<HTMLTextAreaElement>)=>
            dispatch(onPostChangeActionCreator(e.currentTarget.value)),
        addPost:() => {
            dispatch(addPostActionCreator())}
    }
}
const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost)

export default MypostContainer