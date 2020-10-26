import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarouselIntro from '../components/CarouselIntro'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout fluid>
      <Row style={{margin: '0', padding: '0'}}>
        <Col style={{margin: '0', padding: '0'}}>
          <CarouselIntro />
        </Col>
      </Row>
      <Footer>
        <div className="legales">
          <p className="text-light">2020, Instituto Mexicano del Cemento y del concreto A.C. Todos Los Derechos Reservados - Aplicaciones profesionales para la construcción.</p>
        </div>
      </Footer>
    </Layout>
  )
}
