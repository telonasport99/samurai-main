import React from "react";
import {
    ActionType,
    SetCurrentPageType,
    SetTotalCountType, ToggleIsFetchingType,
    UsersActionFollowType,
    UsersActionUnFollowType,
    UsersSetUserType
} from "./store";
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
}
let initialState:InitialStateType = {
        users: [],
        pageSize: 5,
        totalUserCount:20,
        currentPage:1,
        isFetching:false
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
        default:
            return state
    }

}
export let follow = (userId:number):UsersActionFollowType=>({type:'FOLLOW',userId})

export let unFollow=(userId:number):UsersActionUnFollowType=>({type:'UNFOLLOW',userId})
export let setUsers=(users:Array<UsersType>):UsersSetUserType=>({type:'SET-USER',users})
export let setCurrentPage=(currentPage:number):SetCurrentPageType=>({type:'SET-CURRENT-PAGE',currentPage})
export let setTotalCount=(totalCount:number):SetTotalCountType=>({type:'SET-TOTAL-COUNT',totalCount})
export let toggleIsFetching=(isFetching:boolean):ToggleIsFetchingType=>({type:'TOGGLE-IS-FETCHING',isFetching})

export default usersReducer