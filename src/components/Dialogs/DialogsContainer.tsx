import React, {ChangeEvent} from "react";
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    AddPostActionType,
    DialogsType,
    MessageType,
    OnPostChangeActionType,
    SendMessageType, UpdateNewMessageType
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    dispatch:(action: ActionType)=>void
}

/*export function DialogsContainer() {


    return (
        <StoreContext.Consumer>
            {(store)=>{
                let onSendMessageClick = ()=>{
                    store.dispatch(sendMessageActionCreator())
                }

                let onNewMessageChange = (body: string)=>{
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }
        return <Dialogs dialogs={store._state.dialogsPage.dialogs}
                 messages={store._state.dialogsPage.messages}
                 newMessageBody={store._state.dialogsPage.newMessageBody}
                 onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
        />}}
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps=(state:ReduxStateType)=>{
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
}
type MapDispatchToProps = {
    onSendMessageClick:()=>void
    onNewMessageChange:(body:string)=>void
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToProps=>{
    return {
        onSendMessageClick:()=>{
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange:(body:string)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)