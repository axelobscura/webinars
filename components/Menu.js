import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const styleNav = {
    position: 'fixed', 
    zIndex: 1000, 
    width: '100%', 
    margin: 0, 
    left: 0,
    color: '#ffffff',
    fontFamily: 'Oswald',
    fontSize: '2rem'
}

const elInput = {
    border: 'none',
    borderRadius: '10px',
    padding: '7px 10px',
    background: 'rgba(0,0,0,0.7)',
    color: '#ffffff',
    fontSize: '1rem'
}

const elLogo = {
    width: '150px',
    height: '120px'
}

const elBuscador = {
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    border: 'none'
}

export default function Menu() {
    return (
    <Navbar bg="transparent" expand="lg" style={styleNav}>
        <Navbar.Brand href="#">
            <img src="logo.svg" style={elLogo} alt="Catálogo de la cerveza mexicana" title="Catálogo de la cerveza mexicana" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">CATÁLOGO</Nav.Link>
            <Nav.Link href="#link">TIENDA</Nav.Link>
            <NavDropdown title="TIPOS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">CATÁLOGO</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
            </Nav>
            <Form inline>
            <input type="text" placeholder="Buscar cerveza..." className="mr-sm-2" style={elInput} />
            <Button  style={elBuscador}><span class="lnr lnr-magnifier"></span></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}