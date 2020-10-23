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
    const router = useRouter();

    console.log('el router: '+JSON.stringify(router));

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
        background: router.pathname === '/quienes-somos' ? '#222' : 'rgba(255,255,255,0.8)',
    }

    const elLink = {
        color: router.pathname === '/quienes-somos' ? '#fff' : '#333 !important',
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
                <Link href="/quienes-somos"><a style={elLink}>QUIÉNES SOMOS</a></Link>
                <Link href="/cursos"><a style={elLink}>CURSOS EN LÍNEA</a></Link>
                <Link href="/"><a style={elLink}>GERENCIA TÉCNICA</a></Link>
                <Link href="/"><a style={elLink}>HISTORIA</a></Link>
                <Link href="/"><a style={elLink}>MEMBRESÍAS</a></Link>
                <Link href="/"><a style={elLink}>DIRECTORIO</a></Link>
                <Link href="/"><a style={elLink}>TIENDA</a></Link>
                <Link href="/"><a style={elLink}>WEBINARS</a></Link>
                <Link href="/"><a style={elLink}>CONTACTO</a></Link>
                <Link href="/"><a style={elLink}>APLICACIONES</a></Link>
            </Nav>
            <Form inline>
                <input type="text" placeholder="Buscar contenido..." style={elInput} />
                <Button  style={elBuscador}><span className="lnr lnr-magnifier"></span></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}