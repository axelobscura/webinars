import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselIntro() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg"
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
                    src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg"
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
                    src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
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