import axios from "axios";
const instance = axios.create({
        withCredentials: true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers:{
                'API-KEY':'88e747f1-600f-4bbb-8fce-7131a724b96d'}
})
export const usersAPI = {
        getUsers(currentPage=1,pageSize=10){
                return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response=>{
                            return response.data})
        }
}
