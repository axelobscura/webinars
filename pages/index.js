import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarouselIntro from '../components/CarouselIntro'

export default function Home() {
  return (
    <Layout fluid>
      <Row style={{margin: '0', padding: '0'}}>
        <Col style={{margin: '0', padding: '0'}}>
          <CarouselIntro />
        </Col>
      </Row>
    </Layout>
  )
}
