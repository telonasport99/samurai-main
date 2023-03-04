import React, {ChangeEvent} from "react";

import {addPostActionCreator} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state:ReduxStateType)=>{
   return {
        posts:state.profilePage.posts,
   }
   }

   type MapDispatchToProps = {
       addPost:(newPostText:any) =>void
   }
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps=>{
    return{
        addPost:(newPostText:any) => {
            dispatch(addPostActionCreator(newPostText))}
    }
}
const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost)

export default MypostContainer