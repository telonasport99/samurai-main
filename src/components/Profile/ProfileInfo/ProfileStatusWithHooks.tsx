import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";

type Props =  {
    status:string
    updateUserStatus:(status:string)=>void
}

const ProfileStatusWithHooks =  (props:Props)=> {
   let [editMode,setEditMode]= useState(false)
   let [status,setStatus]= useState(props.status)
    let activateEditMode=()=>{setEditMode(true)}
    let deActivateEditMode=()=>{
       setEditMode(false)
        props.updateUserStatus(status)
   }
   let onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
       setStatus(e.currentTarget.value)
   }
        return (
            <>
                {!editMode&&<div>
                        <span onDoubleClick={activateEditMode}>{props.status||'no status'}</span>
                    </div>
                }
                {editMode&&
                    <div>
                        <input onChange={onStatusChange}  autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                    </div>
                }

            </>
        );
    }

export default ProfileStatusWithHooks;