import { api } from "./api";

const medsApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getMeds:builder.query({
            query:()=>({
                url:'/meds'
            })
        })
    })
})

export const {useGetMedsQuery}=medsApi;