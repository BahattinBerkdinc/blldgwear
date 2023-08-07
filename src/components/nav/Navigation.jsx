import React from 'react'
import "./navigation.scss"
import { Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Nav   className="justify-content-center nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Anasayfa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/product' eventKey="link-1">Ürünler</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/#aboutUs' eventKey="link-2">Blldg</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Bize Ulaşın</Nav.Link>
        </Nav.Item>
      </Nav>
  )
}

export default Navigation
