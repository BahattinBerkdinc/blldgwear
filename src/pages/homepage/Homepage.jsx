import React from 'react'
import './homepage.scss'
import Slider from '../../components/slider/Slider'
import {Container}  from "react-bootstrap"
import Spacer from '../../components/spacer/Spacer'
import AboutUs from '../../components/about-us/AboutUs'
import HomeProducts from '../../components/homepage-product/HomeProducts'
import FeatureDetails from '../../components/feature-details/FeatureDetails'
const Homepage = () => {
  return (
    <div className='homepage'>
      <Slider/>
      <Spacer/>
    <Container className='home-page-prods'>
    <HomeProducts/>
    <Spacer/>
    <AboutUs/>
    <Spacer/>
    </Container>
    <Container>
      <Spacer/>
    <FeatureDetails/>
    </Container>
    </div>
  )
}

export default Homepage
