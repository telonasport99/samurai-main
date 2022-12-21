import React, {FC} from 'react';
import {connect} from "react-redux";

import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleIsFetching,
    unFollow, UsersType,
} from "../../redux/user-reducer";
import axios from "axios";
import Users from "./Users";
import oval from '../../assets/images/oval.svg'
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users totalUserCount={this.props.totalUserCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
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
}
let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching:(isFetching: boolean)=>void
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
 follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
}))(UsersContainer);