import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../images/blldg_logo.png"
import "./footer.scss"
import Navigation from '../nav/Navigation';
const Footer = () => {
  return (
   <Container className='footer'>
    <Row>
      <Col sm={12}l>
      <Navigation/>
      </Col>
      <Col sm={12} className='d-flex justify-content-center'>
      <img  src={logo} alt="" />
      </Col>
      <Col sm={12}>
      <small>
        Adres : Lorem ipsum dolor sit.
      </small>
      <small>
        Tel : 4747488339939
      </small>
      </Col>
    </Row>
   </Container>
  )
}

export default Footer
