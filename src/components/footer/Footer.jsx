import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../images/blldg_logo.png"
import "./footer.scss"

const Footer = () => {
  return (
   <Container className='footer'>
    <Row>
      <Col sm={12} className='d-flex justify-content-center'>
      <img  src={logo} alt="" />
      </Col>
      <Col sm={12}>
      <span><small>
        Adres : Lorem ipsum dolor sit.
      </small></span>
      <span>
      <small>
        Tel : 4747488339939
      </small>
      </span>
      </Col>
    </Row>
   </Container>
  )
}

export default Footer
