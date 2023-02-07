import React from "react";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let mapStateToProps = (state: ReduxStateType):mapStateToPropsType =>
    ({ profile: state.profilePage.profile,
})
let WithUrlDataComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps,{getUserProfile})(WithUrlDataComponent ))