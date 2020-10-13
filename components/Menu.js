import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const elInput = {
    border: 'none',
    padding: '13px 10px',
    background: 'rgba(0,0,0,0.7)',
    color: '#ffffff',
    fontSize: '0.7rem',
    marginRight: '0 !important'
}

const elLogo = {
    width: '9rem',
    padding: '10px 10px',
    margin: '0',
    paddingRight: '0'
}

const elBuscador = {
    background: 'rgba(0,0,0,1)',
    color: '#fff',
    border: '3px solid #333',
    borderRadius: 0,
    marginRight: '5px'
}

export default function Menu(props) {
    console.log(props.bkcolor.pathname);
    const router = useRouter();

    const styleNav = {
        position: 'fixed', 
        zIndex: 1000, 
        width: '100%', 
        margin: 0, 
        left: 0,
        color: '#ffffff',
        fontFamily: 'Oswald',
        fontSize: '0.8rem',
        padding:'0',
        right: 0,
        background: props.bkcolor.pathname === '/quienes-somos' ? '#222' : 'transparent',
    }

    return (
    <Navbar expand="lg" style={styleNav}>
        <Navbar.Brand>
            <Link href="/">
                <img src="logo.svg" style={elLogo} alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/quienes-somos">QUIÉNES SOMOS</Link>
                <Link href="/">CURSOS</Link>
                <Link href="/">GERENCIA TÉCNICA</Link>
                <Link href="/">HISTORIA</Link>
                <Link href="/">MEMBRESÍAS</Link>
                <Link href="/">DIRECTORIO</Link>
                <Link href="/">TIENDA</Link>
            </Nav>
            <Form inline>
                <input type="text" placeholder="Buscar contenido..." style={elInput} />
                <Button  style={elBuscador}><span className="lnr lnr-magnifier"></span></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}