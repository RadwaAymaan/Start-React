
import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';

let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'about',element:<About/>},
  {path:'contacts',element:<Contacts/>},
  {path:'*',element:<Contacts/>},
  ]}
])
export default function () {
  return <RouterProvider router ={routers}></RouterProvider>
}
