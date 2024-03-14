import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMainMenu from './AdminMainScreen'

const AdminDashboard = () => {
  return (
    <>
    <AdminMainMenu/>
    <Outlet/>
    </>
  )
}

export default AdminDashboard