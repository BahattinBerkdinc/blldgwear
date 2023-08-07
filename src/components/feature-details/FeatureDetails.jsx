import React from 'react'
import "./featuredetails.scss"
import { Col, Row } from 'react-bootstrap'
import cargo from "../../images/cargo.png"
import quarantee from "../../images/guarantee.png"
import services from "../../images/services.png"
const FeatureDetails = () => {
  return (
    <div className='feature-details'>
    <Row>
        <Col >
       
            <div className="fb-content">
            <img src={quarantee} alt="" />
            <div className="fb-text">
            <h2>garanti ve kolay değişim</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, nostrum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, iure eaque? Corporis ipsam iste consequuntur placeat sed nam, voluptas fuga nisi ad sint nostrum ducimus inventore quod soluta eaque possimus? </p>
            </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col >
        
            <div className="fb-content">
            <img src={cargo} alt="" />
            <div className="fb-text">
            <h2>hızlı ve güvenilir kargo</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, nostrum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, iure eaque? Corporis ipsam iste consequuntur placeat sed nam, voluptas fuga nisi ad sint nostrum ducimus inventore quod soluta eaque possimus? </p>
            </div>
            </div>
        </Col>
    </Row>
    <Row>
        
        <Col>
            <div className="fb-content">
            <img src={services} alt="" />
            <div className="fb-text">
            <h2>7/24 müşteri hizmetleri</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, nostrum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, iure eaque? Corporis ipsam iste consequuntur placeat sed nam, voluptas fuga nisi ad sint nostrum ducimus inventore quod soluta eaque possimus? </p>
            </div>
            </div>
        </Col>
    </Row>
    </div>
  )
}

export default FeatureDetails
