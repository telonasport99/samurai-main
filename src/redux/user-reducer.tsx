import React from "react";
import {
    ActionType,
    SetCurrentPageType,
    SetTotalCountType, ToggleIsFetchingType, ToggleIsFollowingProgress,
    UsersActionFollowType,
    UsersActionUnFollowType,
    UsersSetUserType
} from "./store";
import {usersAPI} from "../api/api";
export type LocationType= {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    name:string
    status: string
    location: LocationType
}
export type InitialStateType = {
    users:Array<UsersType>
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:boolean
}
let initialState:InitialStateType = {
        users: [],
        pageSize: 5,
        totalUserCount:20,
        currentPage:1,
        isFetching:false,
        followingInProgress:false
}
const usersReducer=(state:InitialStateType=initialState,action: ActionType): InitialStateType=> {
    switch (action.type) {
        case "FOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:true}:u)}
        case "UNFOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:false}:u)}
        case "SET-USER":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUserCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case  "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state
    }

}
export let followSuccess = (userId:number):UsersActionFollowType=>({type:'FOLLOW',userId})
export let unfollowSuccess=(userId:number):UsersActionUnFollowType=>({type:'UNFOLLOW',userId})
export let setUsers=(users:Array<UsersType>):UsersSetUserType=>({type:'SET-USER',users})
export let setCurrentPage=(currentPage:number):SetCurrentPageType=>({type:'SET-CURRENT-PAGE',currentPage})
export let setTotalCount=(totalCount:number):SetTotalCountType=>({type:'SET-TOTAL-COUNT',totalCount})
export let toggleIsFetching=(isFetching:boolean):ToggleIsFetchingType=>({type:'TOGGLE-IS-FETCHING',isFetching})
export let toggleFollowingInProgress=(followingInProgress:boolean):ToggleIsFollowingProgress=>({type:'TOGGLE-IS-FOLLOWING-PROGRESS',followingInProgress})


export const getUsers=(currentPage:number,pageSize:number) =>{
return async(dispatch:any)=>{
   dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage,pageSize)
       dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    }}
export const follow=(userId:number) =>{
return  async (dispatch:any)=>{
    dispatch(toggleFollowingInProgress(true))
    let response = await usersAPI.follow(userId)
            if(response.data.resultCode == 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false))
    }
}
export const unFollow=(userId:number) =>{
return async (dispatch:any)=>{
    dispatch(toggleFollowingInProgress(true))
    let response = await usersAPI.unfollow(userId)
            if(response.data.resultCode == 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false))
        }
}
export default usersReducer