import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 1},
        {id: 2, message: 'hel2', likesCount: 12},
        {id: 3, message: 'hel', likesCount: 6},
    ],
    profile: null,
    status:''
}
it('post shoud be added',()=>{
    let action = addPostActionCreator('it-kamasutra')
    let newState = profileReducer(initialState,action)
    expect(newState.posts.length).toBe(4)
})
it('delete work correct',()=>{
    let action= deletePostActionCreator(2)
    let newState = profileReducer(initialState,action)
    expect(newState.posts.length).toBe(2)
})