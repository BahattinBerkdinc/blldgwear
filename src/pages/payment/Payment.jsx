import React, { useState } from 'react';
import "./payment.scss"
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Payment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    paymentMethod: 'kapida',
    shippingMethod: 'aras', // Varsayılan olarak "Aras Kargo" seçeneği
    accepted: false
  });
  const [submittedData, setSubmittedData] = useState(null);

  const {cart} = useSelector(state=>state.cart)
  console.log(cart.length);

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
   
  }
  

  return (
    <Container className='d-flex justify-content-between gap-5'>
      <Col sm={12} md={6}>
        <p>Bilgilerinizi doldurunuz</p>
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
              label="Kapıda Ödeme"
              name="paymentMethod"
              value="kapida"
              checked={formData.paymentMethod === 'kapida'}
              onChange={handleInputChange}
            />
            <Form.Check
              type="radio"
              label="Kredi Kartı ile Ödeme"
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
          <Button variant="primary" type="submit">
            Kaydet
          </Button>
        </Form>
      </Col>

      <Col sm={12} md={6}>
        <div className="result-panel">
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
                <h2>SEPET</h2>
                {
                    cart.map((item,i)=>(
                        <ul style={{listStyle:"none", padding:"0", fontSize:".9rem"}} key={item.i}>
                            <li>{item.name}</li>
                            <li>{item.price} TL</li>
                        </ul>                   
                    ))
                }
                <hr />
                <div>
                    <p>Toplam Tutar: {calculatedTotalPrice()} TL</p>
                </div>
                <hr />

              </div>


            </div>
          )}
        </div>
      </Col>
    </Container>
  );
};

export default Payment;








