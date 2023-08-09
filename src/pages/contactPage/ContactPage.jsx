import React from 'react'
import { Container } from 'react-bootstrap'
import "./contact.scss"

const ContactPage = () => {
  return (
    <Container>
        <div className="contact">
            <div className="contact-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446942.4223474516!2d-94.88653961275611!3d32.46855349308894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862832e4e44ad419%3A0x620d177fe9dca6da!2sMississippi%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1691618886772!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-right">
                <div className='d-flex gap-3'>
                <span>Adres :</span>
                <a>Lorem ipsum dolor sit.</a>
                </div>
                <div className='d-flex gap-3'>
                <span>Telefon :</span>
                <a href='tel:555555555'>555 5555 555 55</a>
                </div>
                <div className='d-flex gap-3'>
                <span>Mail :</span>
                <a href='mailto:blldg@info.com'>blldg@info.com</a>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ContactPage
