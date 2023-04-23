import React from 'react';
import styles from './../common/FormsControls/FormsControls.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilis/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../redux/redux-store";
type FormDateType ={
        email:string
        password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDateType>> = ({handleSubmit,error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/></div>
                <div><Field placeholder={'Password'} name={'password'} validate={[required]} component={Input} type={'password'}/></div>
                <div><Field component={Input} name={'rememberMe'} type={"checkbox"}/>remember</div>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
                <div><button>login</button></div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm<FormDateType>({
    form: 'login'
})(LoginForm)
const Login = (props:any)=>{
    const onSubmit=(formData:FormDateType)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={`/profile/${props.userId}`}/>
    }
    return ( <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}
const mapStateToProps = (state:ReduxStateType)=>(
    {isAuth: state.auth.isAuth}
)
export default connect(mapStateToProps,{login,})(Login);