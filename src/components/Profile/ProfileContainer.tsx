import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType, RootState} from "../../redux/redux-store";
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";

type mapStateToPropsType = {
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
               this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile} />;
    }
}

let mapStateToProps = (state: ReduxStateType) => ({ profile: state.profilePage.profile })
export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)