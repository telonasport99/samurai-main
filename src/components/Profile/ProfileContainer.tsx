import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamType={
    userId:string
}
type mapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    getUserProfile:(profileId:string)=>void
}
type OwnPropsType= mapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType>&OwnPropsType


class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile} />;
    }
}

let mapStateToProps = (state: ReduxStateType):mapStateToPropsType => ({ profile: state.profilePage.profile })
let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataComponent )