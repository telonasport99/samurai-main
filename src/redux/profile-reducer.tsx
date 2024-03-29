import React from "react";
import {RootStateOrAny} from "react-redux";
import state, {
    ActionType,
    AddPostActionType, DeletePostActionType,
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
        profile: null,
    status:''
}
const profileReducer=(state: ProfilePageType=initialState,action: ActionType): ProfilePageType=> {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                message: action.newPostText,
                likesCount: 3
            }
            return {...state,
                posts:[newPost,...state.posts],
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
        case 'DELETE-POST':
            return {...state, posts:state.posts.filter(el=>el.id!=action.postId)}
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
export let addPostActionCreator = (newPostText:any):AddPostActionType=>{
    return {
        type:'ADD-POST',
        newPostText
    }
}
export let deletePostActionCreator = (postId:number):DeletePostActionType=>{
    return {
        type:'DELETE-POST',
        postId
    }
}
export let setUserProfile=(profile:any):SetUserProfileType=>{
    return {
        type:'SET-USER-PROFILE',
        profile
    }
}
export let getUserProfile=(userId:string)=>async (dispatch:any)=>{
 let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}
export let getUserStatus = (userId:string)=>async (dispatch:any)=>{
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatusActionCreator(response.data))}
export let updateUserStatus = (status:string)=>async (dispatch:any)=>{
    let response = await  profileAPI.updateStatus(status)
            if(response.data.resultCode === 0){
        dispatch(setStatusActionCreator(status))}}
export default profileReducer