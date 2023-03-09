import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilis/validators";
type FormDateType ={
        login:string
        password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDateType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/></div>
                <div><Field placeholder={'Password'} name={'password'} validate={[required]} component={Input}/></div>
                <div><Field component={Input} name={'rememberMe'} type={"checkbox"}/>remember</div>
                <div><button>login</button></div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm<FormDateType>({
    form: 'login'
})(LoginForm)
const Login = ()=>{
    const onSubmit=(formData:FormDateType)=>{
        console.log(formData)
    }
    return ( <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

export default Login;