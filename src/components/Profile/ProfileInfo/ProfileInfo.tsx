import React from "react";
import cl from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import ProfileStatus from "./ProfileStatus";

type Props =  {
    profile: ProfileType | null
}
function ProfileInfo(props:Props) {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <img src={props.profile.photos.large}
                 alt=""/>
            <ProfileStatus status={'321'}/>
            <p>My name is {props.profile.fullName}</p>
            <p>{props.profile.aboutMe}</p>
            <p>Search work: {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</p>
        </div>
    )
}

export default ProfileInfo