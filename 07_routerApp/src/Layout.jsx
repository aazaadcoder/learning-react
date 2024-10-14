import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>  
    {/* // we can change things inside outlet rest all things will be same  */}
    <Footer/>
    </>
  )
}

export default Layout
