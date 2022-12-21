import React from "react";
import state, {ActionType, RootStateType} from "./store";
type sidebarReducerType = (state:RootStateType,action:ActionType)=>RootStateType
let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello', likesCount: 1},
            {id: 2, message: 'hel2', likesCount: 12},
            {id: 3, message: 'hel', likesCount: 6},
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Dimy'},
            {id: 3, name: 'Dimyh'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'hi'}
        ],
        newMessageBody: ''
    },
    sidebarPage:{}
}
export const sidebarReducer=(state=initialState,action: any)=> {
    return state
}
