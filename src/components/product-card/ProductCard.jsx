import { Button, Card, Col } from 'react-bootstrap'

import {AiOutlineShoppingCart, AiOutlineStar} from "react-icons/ai"
import "./productcard.scss"
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({item}) => {
const navigate = useNavigate()
  const {name,image,price,size,rate,totalRate} = item;
const {cart} = useSelector((state) => state.cart);
const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
  }
  

  return (
    
      <Card className=' product-card h-100'>
          <Card.Img variant="top" className='img-fluid' src={image} style={{height: "400px", width: "100%",objectFit: "cover"}}/>
          <Card.Body>
            <Card.Subtitle className='card-star my-2'>
                {
                    [...Array(5)].map((_, i) => (
                        <AiOutlineStar key={i}
                        style={{color: i < rate ? `orange` : "gray"}}
                        />
                    ))
                }
                <span><small>({totalRate})</small></span>
            </Card.Subtitle>
              <Card.Text>{name}</Card.Text>
              <Card.Subtitle>{price} TL</Card.Subtitle>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-center gap-2'>
          <Button className='text-white w-100 justify-content-center'  onClick={()=>navigate(`/product/${item.id}`)} >Detayları Gör </Button>
              <Button className='text-white w-100 justify-content-center'
              onClick={()=>addCart(item)}
              >Sepete Ekle <AiOutlineShoppingCart/></Button>
          </Card.Footer>
      </Card>
  )
}

export default ProductCard
