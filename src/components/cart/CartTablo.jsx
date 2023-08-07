import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillDelete, AiOutlineRollback } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart,resetCart } from '../../store/cartSlice';
import { setSize } from '../../store/sizeSlice';
import Spacer from '../spacer/Spacer';


const CartTablo = () => {
    const navigate = useNavigate()
    const {cart} = useSelector((state) => state.cart);
    const {size} = useSelector((state) => state.size);
    const dispatch = useDispatch();



    const removeItem = (id) => {
      dispatch(removeFromCart(id));
      dispatch(setSize(''));
    }

    const removeCart = () => {
      dispatch(resetCart());
      dispatch(setSize(''));
    }
    

    const calculatedTotalPrice = () => {
     let totalPrice = 0
      for (const item of cart){
        totalPrice += item.price
      }
      return totalPrice.toFixed(2)
    }
    

  return (
    <Container className='d-flex flex-column align-items-end'>
        <span onClick={() => navigate(-1)} className="go-back mb-5">
                <AiOutlineRollback /> Geri Dön
              </span>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Adı</th>
            <th>Beden</th>
            <th>Fiyat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                cart.map((item,i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{!item.size ? "beden secilmedi" : item.size}</td>
              <td>{item.price}</td>
              <td style={{cursor:"pointer"}} className="text-center">
                <AiFillDelete className='text-danger'
                onClick={()=>removeItem(item.id)}
                />
            
              </td>
            </tr>
                ))
            }

            <tr>
                <td colSpan={5} className='text-end'>
                   Toplam Fiyat : {calculatedTotalPrice()} TL
                </td>
            </tr>
            
        </tbody>
        
      </Table>
      <Button variant='danger' className='text-white text-center mt-3' disabled={cart.length === 0} onClick={removeCart} >Sepeti Temizle</Button>
      <Button className='text-white text-center mt-3' disabled={cart.length === 0} >Ödemeye Geç</Button>
    </Container>
  );
};

export default CartTablo;
