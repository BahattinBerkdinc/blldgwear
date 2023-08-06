import React from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import data from "../../data/data.json"
import { Card, Col, Row } from 'react-bootstrap'
import {BsChevronDoubleRight} from 'react-icons/bs'
import "./homeproducts.scss"
import { useNavigate } from 'react-router-dom'
const HomeProducts = () => {

  const navigate = useNavigate()
  
  return (
    <Row > 
      <h1>ürünlerimiz</h1>
      <div className="prod-content">
      {
  data.products.slice(0,3).map((item) => (
    <Col className='g-4 products' md={6} lg={3} key={item.id}>
    <ProductCard item={item} />
    </Col>
  ))
    }
    <Card className='show-more-box h-100' onClick={()=>navigate("/product")}>
      <Card.Body className='show-more'>
        <BsChevronDoubleRight/>
      </Card.Body>
    </Card>
      </div>
    </Row>
  )
}

export default HomeProducts
