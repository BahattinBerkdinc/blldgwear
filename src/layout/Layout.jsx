import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Spacer from '../components/spacer/Spacer'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Spacer/>
      <Outlet/>
      <Spacer/>
      <Footer/>
    </div>
  )
}

export default Layout
