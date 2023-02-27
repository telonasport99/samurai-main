import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType={
    userId:string
}
type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
}
type MapDispatchPropsType = {
    getUserProfile:(profileId:string)=>void
    getUserStatus:(userId:string)=>void
    updateUserStatus:(status:string)=>void
}
type OwnPropsType= mapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType>&OwnPropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '27187'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        console.log(this.props.status)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}/>;
    }
}

let mapStateToProps = (state: ReduxStateType):mapStateToPropsType =>
    ({ profile: state.profilePage.profile,
        status: state.profilePage.status
    })
let WithUrlDataComponent = withRouter(ProfileContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)