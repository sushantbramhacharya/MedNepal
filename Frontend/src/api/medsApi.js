import { api } from "./api";
import { BASE_URL } from "../constants";

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
        setReview:builder.mutation({
            query:(data)=>({
                url:BASE_URL+'/meds/review',
                method:"POST",
                body:data
            })
        }),
        getReview:builder.query({
            query:(medId)=>({
                query:(medId)=>({
                    url:'/meds/review/'+medId
                }),
                keepUnusedDataFor:5
            })
        })
    })
})

export const {useGetMedsQuery,useGetMedByIdQuery,useSetReviewMutation}=medsApi;