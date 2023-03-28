import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {UsersType} from "./user-reducer";
import {setAuthUserData} from "./auth-reducer";

export type StoreType={
    _state:RootStateType
    getState:()=>RootStateType
    _callSubscriber:(state:RootStateType)=>void
    subscribe:(observer:(state:RootStateType)=>void)=>void
    dispatch:(action:ActionType)=>void
}
export type ActionType= AddPostActionType|UpdateNewMessageType|SendMessageType |
    UsersActionFollowType | UsersActionUnFollowType|UsersSetUserType |
    SetCurrentPageType | SetTotalCountType | ToggleIsFetchingType|ToggleIsFollowingProgress|
    SetUserProfileType|ReturnType<typeof setAuthUserData>|SetStatusActionType| SetInitializedType|DeletePostActionType


export type SetStatusActionType ={
    type:'SET-STATUS'
    status:string
}
export type AddPostActionType = {
    type:'ADD-POST'
    newPostText:any
}
export type DeletePostActionType = {
    type:'DELETE-POST'
    postId:number
}
export type UsersActionFollowType = {
    type:'FOLLOW'
    userId:number
}
export type UsersActionUnFollowType = {
    type:'UNFOLLOW'
    userId:number
}
export type UsersSetUserType = {
    type:'SET-USER'
    users:Array<UsersType>
}
export type SetCurrentPageType = {
    type:"SET-CURRENT-PAGE"
    currentPage:number
}
export type SetTotalCountType = {
    type:'SET-TOTAL-COUNT'
    totalCount:number
}
export type OnPostChangeActionType = {
    type:"ON-POST-CHANGE"
    newPostText:string}
export type UpdateNewMessageType = {
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string
}
export type SendMessageType = {
    type:'SEND-MESSAGE',
    newMessageBody:any
}
export type ToggleIsFetchingType = {
    type:'TOGGLE-IS-FETCHING'
    isFetching:boolean
}
export type ToggleIsFollowingProgress = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    followingInProgress: boolean
}
export type SetUserProfileType = {
    type:`SET-USER-PROFILE`
    profile:null
}
export type SetInitializedType = {
    type:`INITIALIZED_SUCCESS`
}
let store:StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: 1},
                {id: 2, message: 'hel2', likesCount: 12},
                {id: 3, message: 'hel', likesCount: 6},
            ],
            profile: null,
            status:''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Dimy'},
                {id: 3, name: 'Dimyh'}
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi'},
                {id: 3, message: 'hi'}
            ],
            newMessageBody: ''
        },
        sidebarPage:{},


    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType){
        console.log('state', state)},
    subscribe (observer:(state:RootStateType)=>void){
        this._callSubscriber=observer
    },
    dispatch(action:ActionType){
        profileReducer(this._state.profilePage,action)
        dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }

}


export type MessageType = {
    id?: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfileType = {
    aboutMe: string
    contacts: { facebook: string; website: null | string; vk: string; twitter: string; instagram: string }
    fullName: string;
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {small: string; large: string}
    userId: number;
    status:string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status:string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarPageType={

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarPageType
}
export default store;


