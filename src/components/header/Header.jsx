
import { Container } from 'react-bootstrap'
import logo from "../../images/blldg_logo.png"
import './header.scss'
import data from '../../data/data.json'

const Header = () => {

 

  return (
    <Container className='header'> 
        <img src={logo} alt="" />
    </Container>
  )
}

export default Header
