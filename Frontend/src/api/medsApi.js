import { api } from "./api";

const medsApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getMeds:builder.query({
            query:()=>({
                url:'/meds'
            }),
            keepUnusedDataFor:5
        }),
        getMedById:builder.query({
            query:(medId)=>({
                url:'/meds/'+medId
            }),
            keepUnusedDataFor:5
        })
    })
})

export const {useGetMedsQuery,useGetMedByIdQuery}=medsApi;