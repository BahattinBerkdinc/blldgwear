import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Spacer from '../../components/spacer/Spacer'
import CartTablo from '../../components/cart/CartTablo'

const CartPage = () => {
  return (
   <Container>
    <Spacer/>
     <CartTablo/>
   </Container>
  )
}

export default CartPage
