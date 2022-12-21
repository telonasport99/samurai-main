import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType, ProfileType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";
import {useSelector} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";

export type ProfileProp = {
    // posts: Array<PostsType>
    // newPostText:string
    // dispatch:(action: ActionType)=>void
    profile: ProfileType;
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