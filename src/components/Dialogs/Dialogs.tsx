import React, {ChangeEvent} from "react";
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    onSendMessageClick: (value:string) => void
    onNewMessageChange: (body: string) => void
    isAuth:boolean
}

function Dialogs(props:DialogsPageTypeProps) {
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body = e.currentTarget.value
        props.onNewMessageChange(body)
        alert(body)
    }
    let addNewMessage=(value:any)=>{
        props.onSendMessageClick(value.newMessageBody)
    }
    let dialogsElements = props.dialogs.map(el=> <DialogItem key={el.id}name={el.name} id={el.id}/>)

    let messageElements = props.messages.map(el=> <Message key={el.id} message={el.message}/>)

    return (<div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.message}>
                <div>{messageElements}</div>
                <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
const AddMessageForm = (props:any)=>{
    return ( <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name={'newMessageBody'} placeholder={'Enter your message'}/>
           </div>
        <div><button>send</button></div>
    </form>)
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;