import React from "react";
import { ActionType} from "./store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';


export type InitialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload};
        default:
            return state
    }

}
export const getAuthUserData=()=>async (dispatch:any)=>{
   let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login,true))
            }
        }
export const login=(email:string, password:string, rememberMe:boolean)=>async (dispatch:any)=>{
    let response = await authAPI.login(email,password,rememberMe)
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            }
            else {
                let message  = response.data.messages.length>0?[response.data.messages[0]]:'Some error'
                dispatch(stopSubmit('login',{_error:message}))
            }
}
export const logout=()=>async (dispatch:any)=>{
   let response = await authAPI.logout()
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false))
            }
}
export const setAuthUserData = (userId: string | null,
                                email: string| null,
                                login: string| null,
                                isAuth:boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}