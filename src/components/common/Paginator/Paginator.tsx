import React from "react";
import {UsersType} from "../../../redux/user-reducer";
import styles from "./Paginator.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../api/api";
type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}
let Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(el => {
            return <span key={el} className={styles.pageNum + ` ${props.currentPage === el && styles.selectedPage}`}
                         onClick={(e) => {
                             props.onPageChanged(el)
                         }}>{el}</span>
        })}
    </div>
}
export default Paginator