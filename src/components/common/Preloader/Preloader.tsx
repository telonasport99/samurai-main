import React from "react";
import oval from "../../../assets/images/oval.svg";
import styles from './Preloader.module.css'
let Preloader = ()=>{
    return<div className={styles.preload}><img src={oval}/></div>
}
export default Preloader