import cl from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/store";

function DialogItem(props: DialogsType) {
    return (<div className={cl.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>)
}

export default DialogItem;