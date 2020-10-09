import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';  

export const siteTitle = 'Instituto Mexicano del Cemento y del Concreto A.C.';

export default function Layout({ children }){
    return(
        <Container fluid={true}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" type="image/png" href="http://www.imcyc.com/wp-content/uploads/2017/07/favicon.png" />
                <meta name="description" content="Instituto Mexicano del Cemento y del Concreto A.C." />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
            </Head>
            <Menu />
            <Row>
                {children}
            </Row>
        </Container>
    )
}