import React from "react";
import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {ActionType} from "./store";
import usersReducer from "./user-reducer";

export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>
export type StoreType = Store<ReduxStateType, ActionType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store: StoreType = createStore(reducers)

export default store