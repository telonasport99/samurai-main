import React from "react";
import {RootStateOrAny} from "react-redux";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType, SetStatusActionType, SetUserProfileType
} from "./store";
import {profileAPI, usersAPI} from "../api/api";
type profileReducerType = (state:ProfilePageType,action:ActionType)=>ProfilePageType
let initialState = {
        posts: [
            {id: 1, message: 'hello', likesCount: 1},
            {id: 2, message: 'hel2', likesCount: 12},
            {id: 3, message: 'hel', likesCount: 6},
        ],
        newPostText:'',
        profile: null,
    status:''
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
            return {
                ...state,
                profile: action.profile
            }
            case "SET-STATUS":
                return {...state,
            status: action.status
            }
        default:
            return state
    }

}
export let setStatusActionCreator = (status:string):SetStatusActionType=>{
    return {
        type:"SET-STATUS",
        status
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
export let getUserProfile=(userId:string)=>(dispatch:any)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export let getUserStatus = (userId:string)=>(dispatch:any)=>{
    profileAPI.getStatus(userId)
        .then(response=>
        dispatch(setStatusActionCreator(response.data)))
}
export let updateUserStatus = (status:string)=>(dispatch:any)=>{
    profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode === 0){
        dispatch(setStatusActionCreator(status))}})}
export default profileReducer