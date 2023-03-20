import {ReduxStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state:ReduxStateType)=>{
    return state.usersPage.users
}
export const usersSelector = createSelector(getUsers, (users) => {
    return users
})
export const getPageSizeSelector = (state:ReduxStateType)=>{
    return state.usersPage.pageSize
}
export const pageSizeSelector = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize
})
export const getTotalUsersCountSelector = (state:ReduxStateType)=>{
    return state.usersPage.totalUserCount
}
export const totalUsersCountSelector = createSelector(getTotalUsersCountSelector, (totalUserCount) => {
    return totalUserCount
})
export const getCurrentPageSelector = (state:ReduxStateType)=>{
    return state.usersPage.currentPage
}
export const currentPageSelector = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
})
export const getIsFetchingSelector = (state:ReduxStateType)=>{
    return state.usersPage.isFetching
}
export const isFetchingSelector = createSelector(getIsFetchingSelector, (isFetching) => {
    return isFetching
})
export const getFollowingInProgressSelector = (state:ReduxStateType)=>{
    return state.usersPage.followingInProgress
}
export const followingInProgressSelector = createSelector(getFollowingInProgressSelector, (followingInProgress) => {
    return followingInProgress
})
