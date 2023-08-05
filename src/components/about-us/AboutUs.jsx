import React from 'react'
import "./aboutus.scss"
import { Col, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <div id='aboutUs' className='about-us'> 
        <Row >
            <Col sm={12} md={10}>
              <div className="content">
              <h2>Future Style</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium distinctio praesentium modi illo deleniti repellat, illum reprehenderit alias tempore voluptatibus vero dolorum eum velit necessitatibus animi sed, a esse quasi, atque saepe. Consequatur excepturi alias consequuntur aperiam suscipit placeat voluptatum quia earum tempore, provident unde sit autem, blanditiis amet odit nobis quo dolor! Voluptate minus adipisci odio id hic!</p>
              </div>
            
           
                <div className="img-box">
                    <img src="https://images.pexels.com/photos/4584379/pexels-photo-4584379.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
            </Col>  
             <Col sm={12} md={10}>
                <div className="img-box">
                    <img src="https://images.pexels.com/photos/3214772/pexels-photo-3214772.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
           
                <div className="content content-right">
                <h2>Future Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium distinctio praesentium modi illo deleniti repellat, illum reprehenderit alias tempore voluptatibus vero dolorum eum velit necessitatibus animi sed, a esse quasi, atque saepe. Consequatur excepturi alias consequuntur aperiam suscipit placeat voluptatum quia earum tempore, provident unde sit autem, blanditiis amet odit nobis quo dolor! Voluptate minus adipisci odio id hic!</p>
                </div>
               
            </Col>
        </Row>
    </div>
  )
}

export default AboutUs
