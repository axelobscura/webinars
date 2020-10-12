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
        <p className="text-light">HOME</p>
        <p className="text-light">2020 Todos Los Derechos Reservados.</p>
      </Footer>
    </Layout>
  )
}
