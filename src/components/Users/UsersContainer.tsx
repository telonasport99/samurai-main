import React, {FC} from 'react';
import {connect} from "react-redux";

import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {
    follow, getUsers,
    setCurrentPage,
 toggleFollowingInProgress,
    unFollow, UsersType,
} from "../../redux/user-reducer";
import Users from "./Users";
 import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
        /*this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
        /* this.props.setCurrentPage(pageNumber)
         this.props.toggleIsFetching(true)
         usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items)
             })*/
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:boolean
}
let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress:(followingInProgress:boolean)=>void
    getUsers:(currentPage:number,pageSize:number)=>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
/*
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }

}
*/

export default compose<FC>(connect(mapStateToProps, {
    follow, unFollow,
    setCurrentPage, toggleFollowingInProgress,
    getUsers
}))(UsersContainer);