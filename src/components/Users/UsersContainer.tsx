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
import {
    currentPageSelector, followingInProgressSelector, isFetchingSelector,
    pageSizeSelector,
    totalUsersCountSelector,
    usersSelector
} from "../../redux/user-selector";


class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        const {currentPage, pageSize}=this.props
        this.props.getUsers(currentPage,pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize}     = this.props
        this.props.getUsers(pageNumber,pageSize)

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
        users:  usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUserCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
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


export default compose<FC>(connect(mapStateToProps, {
    follow, unFollow,
    setCurrentPage, toggleFollowingInProgress,
    getUsers
}))(UsersContainer);