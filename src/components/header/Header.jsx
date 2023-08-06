
import { Container, Navbar } from 'react-bootstrap'
import logo from "../../images/blldg_logo.png"
import './header.scss'
import Navigation from '../nav/Navigation'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

 const {cart} = useSelector((state) => state.cart)
 const navigate = useNavigate()

  return (
    <Navbar fixed='top' className='navbar p-0 border'>
          <Container className='header'> 
           <img src={logo} alt="" />
           <Navigation/>
           <div className="cart"
           onClick={()=> navigate('/cart')}
           >
           <AiOutlineShoppingCart className='header-cart'/>
           <span className="amount">{cart.length}</span>
           </div>
           </Container>
      </Navbar>
  )
}

export default Header
