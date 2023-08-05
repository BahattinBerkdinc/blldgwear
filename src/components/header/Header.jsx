
import { Container, Navbar } from 'react-bootstrap'
import logo from "../../images/blldg_logo.png"
import './header.scss'
import data from '../../data/data.json'
import Spacer from '../spacer/Spacer'
import Navigation from '../nav/Navigation'

const Header = () => {

 

  return (
    <Navbar fixed='top' className='navbar'>
          <Container className='header'> 
           <img src={logo} alt="" />
           <Navigation/>
           </Container>
      </Navbar>
  )
}

export default Header
