import React from "react";
export const required=(value:any)=>{
    return value?undefined:'Field is required'
}
export const maxLengthCreator =(maxlength:number)=>(value:any)=>{
    return value.length>maxlength?`MaxLength is ${maxlength}`: undefined
}