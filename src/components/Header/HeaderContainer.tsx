import React, {FC} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {ReduxStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (
        userId: number,
        email: string,
        login: string) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
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

// export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)
export default compose<FC>(connect(mapStateToProps, {setAuthUserData})/*, withRouter*/)(HeaderContainer)