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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomeScreen/>}/>
      <Route path='store' element={<StoreScreen/>}/>
      <Route path='login' element={<LoginScreen/>}/>
      <Route path='signup' element={<SignUpScreen/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='med/:id' element={<MedScreen/>}/>
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
