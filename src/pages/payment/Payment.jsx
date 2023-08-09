import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from '../../helpers/sweetalert/SAlert';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../store/cartSlice';
import {AiOutlineRollback} from 'react-icons/ai'
import "./payment.scss"

const Payment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    paymentMethod: '',
    shippingMethod: '', 
    accepted: false
  });
  const [submittedData, setSubmittedData] = useState(null);

  const {cart} = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  const calculatedTotalPrice = () => {
    let totalPrice = 0
    
    for (const item of cart){
      totalPrice += item.price
    }
    return totalPrice.toFixed(2) 
  }

  const subtotal = calculatedTotalPrice()
  console.log(subtotal);

  const mainTotal = (price) => {
    const kdvRate = 0.2;
    const kdvAmount = parseFloat(price) * kdvRate;
    const kargoFee = 50; 
    const totalPrice = parseFloat(price) + kdvAmount + kargoFee;
    return totalPrice.toFixed(2);
  }

  const total = mainTotal(subtotal)
  console.log(total + "total");

  const isFormValid = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.address !== '' &&
      formData.email !== '' &&
      formData.accepted
    );
  }

  const handlePayment = () => {
    SweetAlert("success", "Siparisiniz onaylandı!");
    navigate("/")
    dispatch(resetCart())

    
  }
  
  

  return (
    <Container className='payment'>
      <div className="payment-left">
      <span onClick={() => navigate(-1)} className="go-back mb-5">
                <AiOutlineRollback /> Geri Dön
              </span>
        <p>Bilgilerinizi eksiksiz doldurunuz</p>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>İsim</Form.Label>
            <Form.Control
              type="text"
              placeholder="İsim Giriniz"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Soyad Giriniz"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Adresinizi giriniz"
              maxLength="100"
              style={{ resize: 'none', height: '100px' }}
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Mail adresinizi giriniz"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Ödeme Yöntemi</Form.Label>
            <Form.Check
              type="radio"
              label="Kapıda Nakit Ödeme"
              name="paymentMethod"
              value="kapida"
              checked={formData.paymentMethod === 'kapida'}
              onChange={handleInputChange}
            />
            <Form.Check
              type="radio"
              label="Kapıda Kredi Kartı ile Ödeme"
              name="paymentMethod"
              value="krediKarti"
              checked={formData.paymentMethod === 'krediKarti'}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kargo Seçiniz</Form.Label>
            <Form.Check
              type="radio"
              label="Aras Kargo"
              name="shippingMethod"
              value="aras"
              checked={formData.shippingMethod === 'aras'}
              onChange={handleInputChange}
            />
            <Form.Check
              type="radio"
              label="MNG Kargo"
              name="shippingMethod"
              value="mng"
              checked={formData.shippingMethod === 'mng'}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Kabul Ediyorum"
              name="accepted"
              checked={formData.accepted}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button 
          className='text-white' 
          variant="primary" 
          type="submit"
          disabled={!isFormValid()}
          >
            Kaydet
          </Button>
        </Form>
      </div>

      <div className="payment-right">
          <h2>Sipariş Bilgileri</h2>
          {submittedData && (
            <div>
              <p><strong>İsim: </strong>{submittedData.firstName}</p>
              <p><strong>Soyad: </strong>{submittedData.lastName}</p>
              <p><strong>Adres: </strong>{submittedData.address}</p>
              <p><strong>Email: </strong>{submittedData.email}</p>
              <p><strong>Ödeme Yöntemi: </strong>{submittedData.paymentMethod === 'kapida' ? 'Kapıda Ödeme' : 'Kredi Kartı ile Ödeme'}</p>
              <p><strong>Kargo Yöntemi: </strong>{submittedData.shippingMethod === 'aras' ? 'Aras Kargo' : 'MNG Kargo'}</p>

              <hr />

              <div className="paymentDetail">
                <h4>SEPET BİLGİLERİ</h4>
                {
                    cart.map((item,i)=>(
                        <ul style={{listStyle:"none", padding:"0", fontSize:".9rem"}} key={i}>
                            <li>{item.name}</li>
                            <li>{item.price} TL</li>
                        </ul>                   
                    ))
                }
                <hr />
                <div>
                    <p>Tutar: {subtotal} TL</p>
                    <p>KDV 20% </p>
                    <p>Kargo : 50 TL</p>
                    <p>Toplam Tutar: {total}  TL</p>
                </div>
                <hr />
                <Button className='text-white'
                onClick={handlePayment}
                >Onayla</Button>
              </div>


            </div>
          )}
        </div>
    
    </Container>
  );
};

export default Payment;








