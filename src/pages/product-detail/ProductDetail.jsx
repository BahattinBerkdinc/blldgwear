import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Spacer from '../../components/spacer/Spacer';
import { AiOutlineRollback, AiOutlineStar } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setSize } from '../../store/sizeSlice';
import { addToCart } from '../../store/cartSlice';
import './productdetail.scss';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = data.products.find((item) => item.id == id);

  const {cart} = useSelector((state) => state.cart);
  const {size} = useSelector((state) => state.size);
  const dispatch = useDispatch();
  

  const handleSize = (size) => {
    dispatch(setSize(size));
  }

  // console.log(size);
  

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart")
  }
  
  return (
    <>
      <Spacer />
      <Container>
        <Row className="g-5 product-detail">
          <Col md={6}>
            <div className="product-image">
              <img src={product.image} alt="" />
            </div>
          </Col>
          <Col md={6} className="">
            <div className="product-detail-content">
              <span onClick={() => navigate(-1)} className="go-back">
                <AiOutlineRollback /> Geri Dön
              </span>
              <div className="product-detail-top">
                <h2>{product.name}</h2>
                <h4 className="card-star my-2">
                  {[...Array(5)].map((_, i) => (
                    <AiOutlineStar
                      key={i}
                      style={{
                        color: i < product.rate ? `orange` : 'gray',
                      }}
                    />
                  ))}
                  <span>
                    <small>({product.totalRate})</small>
                  </span>
                </h4>
              </div>
              <h5>{product.price} TL</h5>
              <div className="sizes">
                {product.sizes.map((size) => (
                  <span key={size}
                  onClick={() => handleSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <span className="stock">Stok: {product.stock}</span>
            </div>
            <Button
              className="text-white mt-5"
              onClick={handleAddToCart}
            >
              Sepete Ekle
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
