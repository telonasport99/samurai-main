import React from "react";
import Post from "./Post/Post";
import s from './My.module.css'
import {PostsType} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilis/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: (values:any) => void
}

const Mypost = React.memo( (props: MyPostPropsType) => {
    let postElement = props.posts.map(el => <Post key={el.id} likesCount={el.likesCount} id={1}
                                                  message={el.message}/>)
    let addpost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (<div className={s.content}>
            <div>my posts
                <AddNewPostFormRedux onSubmit={addpost}/>
            </div>
            {postElement}
        </div>
    )
})

let maxLength10 = maxLengthCreator(10)
let AddNewPostForm = (props:any)=>{
    return(<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={Textarea}
                validate={[required,maxLength10]}
            />
            <button >Add post</button>
        </div>
    </form>)
}
let AddNewPostFormRedux=reduxForm({form:'AddNewPostForm'})(AddNewPostForm)
export default Mypost