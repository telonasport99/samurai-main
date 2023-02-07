import React, {ChangeEvent} from "react";
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
    isAuth:boolean
}

function Dialogs(props:DialogsPageTypeProps) {

    let dialogsElements = props.dialogs.map(el=> <DialogItem key={el.id}name={el.name} id={el.id}/>)

    let messageElements = props.messages.map(el=> <Message key={el.id} message={el.message}/>)
    let newMessageBody = props.newMessageBody
    let onSendMessageClick = ()=>{
    props.onSendMessageClick()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
     let body = e.currentTarget.value
        props.onNewMessageChange(body)
    }
    return (<div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.message}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div><textarea placeholder={'Enter your message'}
                                       value={newMessageBody}
                                       onChange={onNewMessageChange}
                        /></div>
                        <div><button onClick={onSendMessageClick}>send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;