import React from "react";
import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {ActionType} from "./store";
import usersReducer from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer, reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>
export type StoreType = Store<ReduxStateType, ActionType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store