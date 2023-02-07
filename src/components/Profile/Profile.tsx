import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType, ProfileType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";

export type ProfileProp = {

    profile: ProfileType|null;
}


function Profile(props: ProfileProp) {
    return (
        <div >
            <ProfileInfo profile={props.profile}/>
           <MypostContainer />
        </div>
    )
}
export default Profile