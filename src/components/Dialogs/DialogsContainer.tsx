import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
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
    onSendMessageClick:(newMessageBody:any)=>void
    onNewMessageChange:(body:string)=>void
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToProps=>{
    return {
        onSendMessageClick:(newMessageBody:any)=>{
            dispatch(sendMessageActionCreator(newMessageBody))
        },
        onNewMessageChange:(body:string)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)