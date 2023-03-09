import React from 'react';
import s from './FormsControls.module.css'

export const FormComponent = ({input, meta, placeholder, children, ...props}:any) => {
    // error check
    const hasError = meta.touched && meta.error
    const formControl = hasError ? s.error : ""

    return (
        <div className={formControl}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props: any): JSX.Element => {
    const {input,meta, ...restProps}=props
    return <FormComponent {...props}><textarea {...input} {...restProps}/></FormComponent>
};


export const Input = (props: any): JSX.Element => {
    const {input,meta, ...restProps}=props
    return <FormComponent {...props}><input {...input} {...restProps}/></FormComponent>
};