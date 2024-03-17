import { BASE_URL } from "../constants";
import { api } from "./api";

export const userApi=api.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:BASE_URL+'/user/login',
                method:'POST',
                body:data
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:BASE_URL+'/user/register',
                method:'POST',
                body:data
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:BASE_URL+'/user/logout',
                method:"DELETE"
            })
        })
    })
})

export const {useLoginMutation,useRegisterMutation,useLogoutMutation}=userApi