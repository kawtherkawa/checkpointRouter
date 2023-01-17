import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBars = () => {
  return (
    <div>
          <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Favourite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBars