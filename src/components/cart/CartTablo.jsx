import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';


const CartTablo = () => {

    const {cart} = useSelector((state) => state.cart);
    const {size} = useSelector((state) => state.size);
    const dispatch = useDispatch();



    const removeItem = (id) => {
      dispatch(removeFromCart(id));
    }
    

  return (
    <Container className='d-flex flex-column align-items-end'>
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
            <tr key={item.id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{size}</td>
              <td>{item.price}</td>
              <td className="text-center">
                <AiFillDelete
                onClick={()=>removeItem(item.id)}
                />
            
              </td>
            </tr>
                ))
            }
            
        </tbody>
        
      </Table>
      <Button className='text-white text-center mt-3'>Ödemeye Geç</Button>
    </Container>
  );
};

export default CartTablo;
