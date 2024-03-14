import { api } from "./api";

const medsApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getMeds:builder.query({
            query:(sort)=>(
                sort===0?
                {
                    url:'/meds'
                }:
                {
                    url:'/meds/sort/'+sort
                }
                ),
            keepUnusedDataFor:5
        }),
        getMedById:builder.query({
            query:(medId)=>({
                url:'/meds/'+medId
            }),
            keepUnusedDataFor:5
        }),
    })
})

export const {useGetMedsQuery,useGetMedByIdQuery}=medsApi;