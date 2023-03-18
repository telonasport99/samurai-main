import React from "react";
import { ActionType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type InitialStateType = {
    initialized:boolean
}

let initialState: InitialStateType = {
   initialized:false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized:true};

        default:
            return state
    }

}
export const initializedSuccess =()=> {
    return{type:'INITIALIZED_SUCCESS'}as const}

export const initializeApp = () => async (dispatch: any) => {
    await Promise.all([dispatch(getAuthUserData())])
    dispatch(initializedSuccess())
}