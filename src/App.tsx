import React, {FC} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {ReduxStateType, RootState} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType =  MapDispatchPropsType & mapStateToPropType
type MapDispatchPropsType = {
    initializeApp:any
}
type mapStateToPropType = {
    initialized:boolean
}
const mapStateToProps = (state:ReduxStateType)=>{
    return{
    initialized: state.app.initialized
}}
class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized)
        return <Preloader/>
        else {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }}
}


export default compose<FC>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)