import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../images/blldg_logo.png"
import "./footer.scss"
const Footer = () => {
  return (
   <Container className='footer'>
    <Row>
      <Col>safsdfså</Col>
      <Col>
      <img src={logo} alt="" />
      </Col>
      <Col>dfgdfgdfg</Col>
    </Row>
   </Container>
  )
}

export default Footer
