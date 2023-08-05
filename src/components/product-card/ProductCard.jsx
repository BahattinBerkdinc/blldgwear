import { Button, Card, Col } from 'react-bootstrap'

import {AiOutlineShoppingCart, AiOutlineStar} from "react-icons/ai"
import "./productcard.scss"

const ProductCard = ({item}) => {

  const {name,image,price,size,rate,totalRate} = item;

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
          <Button className='text-white w-100 justify-content-center'>Detayları Gör </Button>
              <Button className='text-white w-100 justify-content-center'>Hemen Al <AiOutlineShoppingCart/></Button>
          </Card.Footer>
      </Card>
  )
}

export default ProductCard
