import { BASE_URL } from '../constants';
import {api} from './api';

export const cartApi=api.injectEndpoints({
    endpoints:builder=>({
        addToCart:builder.mutation({
            query:(data)=>({
                url:BASE_URL+'/cart/addtocart',
                method:"POST",
                body:data
            })
        }),
        getCartItems:builder.query({
            query:()=>({
                url:BASE_URL+'/cart/getcarts'
            })
        }),
        deleteFromCart:builder.mutation({
            query:(data)=>({
                url:BASE_URL+'/cart/removefromcart',
                method:"DELETE",
                body:data
            })
        })
    })
})

export const {useAddToCartMutation,useGetCartItemsQuery,useDeleteFromCartMutation} = cartApi;