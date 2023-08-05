import {Col, Container, Row } from "react-bootstrap"
import ProductCard from "../../components/product-card/ProductCard"
import data from '../../data/data.json'
import "./products.scss"
import Spacer from "../../components/spacer/Spacer"


const Products = () => {


  return (
    <>
    <Spacer/>
    <Container className="products">
      <h1>Products</h1>
      <Row>
        {
          data.products.map((item) => (
            <Col className="gy-3" md={4} lg={3}    key={item.id}>   
            <ProductCard item={item} />
            </Col>
          ))
        }
    
      </Row>
    </Container>
    </>
    
  )
}

export default Products
