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
        },
        follow(userId:number){
               return  instance.post(`follow/${userId}`)
        },
        unfollow(userId:number){
               return  instance.delete(`follow/${userId}`)
        },
        getProfile(userId:string){
         return   profileAPI.getProfile(userId)
        }
}
export const profileAPI = {
        getProfile(userId:string){
         return   instance.get(`profile/${userId}`)
        },
        getStatus(userId:string){
            return instance.get(`profile/status/${userId}`)
        },
        updateStatus(status:string){
          return instance.put(`profile/status` ,{status})
        }
}
export const authAPI={
    me(){
    return    instance.get(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean=false){
    return    instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
    return   instance.delete(`auth/login`  )
    }
}
