import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserOnlyRoute = () => {
    const {user} = useSelector((state)=>state.userSlice);
    const navigator=useNavigate();
    useEffect(()=>{
    console.log(Object.keys(user).length)
        if(Object.keys(user).length<1)
        {
            navigator('/login')
        }
    },[user])
    if(Object.keys(user).length>1)
        return (
            <Outlet/>
        )
    else
        return <></>
}

export default UserOnlyRoute