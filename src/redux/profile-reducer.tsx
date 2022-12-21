import React from "react";
import {RootStateOrAny} from "react-redux";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType, SetUserProfileType
} from "./store";
type profileReducerType = (state:ProfilePageType,action:ActionType)=>ProfilePageType
let initialState = {
        posts: [
            {id: 1, message: 'hello', likesCount: 1},
            {id: 2, message: 'hel2', likesCount: 12},
            {id: 3, message: 'hel', likesCount: 6},
        ],
        newPostText:'',
        profile: null
}
const profileReducer=(state: ProfilePageType=initialState,action: ActionType): ProfilePageType=> {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                message: state.newPostText,
                likesCount: 3
            }
            return {...state,
                posts:[newPost,...state.posts],
                newPostText:''
            }
        case "ON-POST-CHANGE":
            return {...state,
            newPostText:action.newPostText
            }
        case "SET-USER-PROFILE":
            return {...state,
            profile: action.profile
            }
        default:
            return state
    }

}
export let addPostActionCreator = ():AddPostActionType=>{
    return {
        type:'ADD-POST'
    }
}
export let onPostChangeActionCreator=(text:string):OnPostChangeActionType=>{
    return {type:'ON-POST-CHANGE',
        newPostText:text}
}
export let setUserProfile=(profile:any):SetUserProfileType=>{
    return {
        type:'SET-USER-PROFILE',
        profile
    }
}
export default profileReducer