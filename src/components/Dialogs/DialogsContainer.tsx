import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

/*type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    dispatch:(action: ActionType)=>void
}*/


let mapStateToProps=(state:ReduxStateType)=>{
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = (connect(mapStateToProps, mapDispatchToProps))(AuthRedirectComponent)