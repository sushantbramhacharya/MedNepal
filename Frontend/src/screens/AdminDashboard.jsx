import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMainMenu from './AdminMainScreen'
import { useSelector } from 'react-redux'

const AdminDashboard = () => {
  const user=useSelector((state)=>state.userSlice)
  return (
    <>
    {user.isAdmin&&<><AdminMainMenu/><Outlet/></>}
    </>
  )
}

export default AdminDashboard