import React, {FC} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {ReduxStateType} from "../../redux/redux-store";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type MapStatePropsType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout:()=>void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}
                       userId={this.props.userId} //userId={this.props.data.data.userId}
                       email={this.props.email} //email={this.props.data.data.email}
                       login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}
export default compose<FC>(connect(mapStateToProps, {getAuthUserData,logout}))(HeaderContainer)