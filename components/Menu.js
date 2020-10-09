import React from 'react';
import Link from 'next/link';
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
    fontSize: '1rem'
}

const elInput = {
    border: 'none',
    padding: '7px 20px',
    background: 'rgba(0,0,0,0.7)',
    color: '#ffffff',
    fontSize: '1rem'
}

const elLogo = {
    width: '180px'
}

const elBuscador = {
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    border: 'none'
}

export default function Menu() {
    return (
    <Navbar bg="transparent" expand="lg" style={styleNav}>
        <Navbar.Brand>
            <Link href="/">
                <img src="logo.svg" style={elLogo} alt="Catálogo de la cerveza mexicana" title="Catálogo de la cerveza mexicana" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/quienes-somos">QUIÉNES SOMOS</Link>
                <Link href="/">CATÁLOGO</Link>
            </Nav>
            <Form inline>
            <input type="text" placeholder="Buscar contenido..." className="mr-sm-2" style={elInput} />
            <Button  style={elBuscador}><span class="lnr lnr-magnifier"></span></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}