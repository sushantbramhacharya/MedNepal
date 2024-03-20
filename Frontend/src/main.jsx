import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import StoreScreen from './screens/StoreScreen';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import SignUpScreen from './screens/SignUpScreen.jsx';
import ContactUs from './screens/ContactUs.jsx'
import { Provider } from 'react-redux';
import store from './store.js';
import MedScreen from './screens/MedScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import AdminDashboard from './screens/AdminDashboard.jsx'
import ProductManagementScreen from './screens/ProductManagement.jsx'
import AdminMainScreen from './screens/AdminMainScreen.jsx'
import OrderManagement from './screens/OrderManagement.jsx'
import UserOnlyRoute from './components/UserOnlyRoute.jsx'
import ShowOrders from './components/ShowOrders.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomeScreen/>}/>
      <Route path='store' element={<StoreScreen/>}/>
      <Route path='login' element={<LoginScreen/>}/>
      <Route path='signup' element={<SignUpScreen/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='med/:id' element={<MedScreen/>}/>
      <Route path='admin/' element={<AdminDashboard/>}>
        <Route path='' element={<div className='min-h-[70vh] flex justify-center flex-col'>
          <h1 className='text-center text-3xl'>Welcome to Admin Panel</h1>
          <h1 className='text-center text-xl'>Navigate through menu</h1>
        </div>}/>
        <Route path='medsmanagement/' element={<ProductManagementScreen/>}/>
        <Route path='orders/' element={<OrderManagement/>}/>
      </Route>
      <Route path='user/' element={<UserOnlyRoute/>}>
        <Route path='profile/' element={<ProfileScreen/>}/>
        <Route path='orders/' element={<ShowOrders/>}/>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>,
)
