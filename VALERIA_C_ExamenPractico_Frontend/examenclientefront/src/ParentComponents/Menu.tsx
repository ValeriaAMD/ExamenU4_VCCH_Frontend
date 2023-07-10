import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



export const Menu = () => {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">cliente</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Agregar</Nav.Link>
            <Nav.Link href="#features">Editar</Nav.Link>
            <Nav.Link href="#pricing">Listar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
