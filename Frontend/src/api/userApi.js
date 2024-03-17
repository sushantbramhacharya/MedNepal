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
        })
    })
})

export const {useLoginMutation}=userApi