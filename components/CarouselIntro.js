import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselIntro() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="slide1.jpg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    title="Instituto Mexicano del Cemento y del Concreto A.C."
                    style={{ height: '100vh !important' }}
                />
                <Carousel.Caption>
                    <h3>IMCYC</h3>
                    <h4>Instituto Mexicano del Cemento y del Concreto</h4>
                    <p>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="slide2.jpeg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    title="Instituto Mexicano del Cemento y del Concreto A.C."
                    style={{ height: '100vh !important' }}
                />
                <Carousel.Caption>
                    <h3>IMCYC</h3>
                    <h4>Instituto Mexicano del Cemento y del Concreto</h4>
                    <p>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="slide3.jpg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    title="Instituto Mexicano del Cemento y del Concreto A.C."
                    style={{ height: '100vh !important' }}
                />
                <Carousel.Caption>
                    <h3>IMCYC</h3>
                    <h4>Instituto Mexicano del Cemento y del Concreto</h4>
                    <p>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}