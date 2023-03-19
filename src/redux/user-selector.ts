import {ReduxStateType} from "./redux-store";

export const getUsersSelector = (state:ReduxStateType)=>{
    return state.usersPage.users
}
export const getPageSizeSelector = (state:ReduxStateType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state:ReduxStateType)=>{
    return state.usersPage.totalUserCount
}
export const getCurrentPageSelector = (state:ReduxStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state:ReduxStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state:ReduxStateType)=>{
    return state.usersPage.followingInProgress
}
