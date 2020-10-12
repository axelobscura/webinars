import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselIntro() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/1492232/pexels-photo-1492232.jpeg"
                    alt="Catálogo de la cerveza mexicana"
                    title="Catálogo de la cerveza mexicana"
                    style={{ height: '100vh !important' }}
                />

                <Carousel.Caption>
                    <h3>IMCYC</h3>
                    <p>Instituto Mexicano del Cemento y del Concreto</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg"
                    alt="Catálogo de la cerveza mexicana"
                    title="Catálogo de la cerveza mexicana"
                    style={{ height: '100vh !important' }}
                />
                <Carousel.Caption>
                    <h3>IMCYC</h3>
                    <p>Instituto Mexicano del Cemento y del Concreto</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}