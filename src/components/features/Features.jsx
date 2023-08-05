import React from 'react'
import "./features.scss"
import cargo from "../../images/cargo.png"
import guarantee from "../../images/guarantee.png"
import services from "../../images/services.png"
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <Container>
        <Row className='features'>
            <Col sm={12} md={4}>
                <div className="feature-box">
                <div className="fb_item">
                    <img src={guarantee} alt="" />
                </div>
                <h3>YÜKSEK KALİTE</h3>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="feature-box">
                <div className="fb_item">
                    <img src={cargo} alt="" />
                </div>
                <h3>hızlı kargo</h3>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="feature-box">
                <div className="fb_item">
                    <img src={services} alt="" />
                </div>
                <h3>Müşteri Servisi</h3>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Features
