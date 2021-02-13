import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/Footer'

const containerQS = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}

const columnaQS = {
    display: 'flex',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '30em 1',
}

const columnaQSTitulo = {
    margin: '0', 
    padding: '0',
    width: '100%',
    display: 'flex',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(17,17,17)',
    background: 'linear-gradient(306deg, rgba(17,17,17,1) 0%, rgba(119,119,119,1) 100%)'
}

const columnaQSh1 = {
    textAlign: 'center',
    fontWeight: '100',
    color: '#fff',
    fontSize: '1rem'
}

const columnaQSp = {
    textAlign: 'justify',
    padding: '10px 30px',
    color: '#333',
    fontWeight: '100'
}

const columnaQSh3 = {
    padding: '10px 30px',
    color: '#333',
    textAlign: 'center'
}

export default function Cursos() {
    return (
        <Layout fluid>
            <Container fluid style={containerQS}>
                <Row style={columnaQS}>
                    <Col className="d-none d-sm-flex" style={columnaQSTitulo}>
                        <h1 style={columnaQSh1}>QUIÉNES SOMOS</h1>
                    </Col>
                    <Col style={columnaQS}>
                        <div>
                        <h3 style={columnaQSh3}><b>Instituto Mexicano del Cemento y del Concreto A.C.</b></h3>
                        <hr/>
                        <p style={columnaQSp}><b>El IMCYC, A.C.</b> es una asociación no lucrativa dedicada a la <b>investigación, enseñanza y difusión de de las técnicas de aplicación del cemento y del concreto</b>. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.<br/><br/><b>El IMCYC surgió en 1923</b> como un «Comité para Propagar el Uso del Cemento Portland». Ya en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., con el objetivo de <b>investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción</b>, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br/><br/>De este modo, se aportan nuevos conocimientos sobre el cemento y el concreto, y se enseña a trabajarlo con calidad, resolviendo los problemas de aplicación en las obras y orientando a los profesionales en sus múltiples oportunidades de utilización. Así mismo, se fortalecen nuestras estructuras, desarrollando al personal, ampliando nuestra presencia nacional e internacional y haciendo más efectivas y eficientes las operaciones. <b>El IMCYC es imagen, voz y representatividad del Sector Cemento y Concreto ante la sociedad, las autoridades nacionales y entidades internacionales, no estando comprometido con ninguna de las empresas del ramo</b>.</p>
                        </div>
                        <hr/>
                    </Col>
                </Row>
            </Container>
            <Footer>
                <Row className="menuFooter">
                    <Col>
                        <p>QUIENES SOMOS</p>
                    </Col>
                    <Col>
                        <p>QUIENES SOMOS</p>
                    </Col>
                    <Col>
                        <p>QUIENES SOMOS</p>
                    </Col>
                    <Col>
                        <p>QUIENES SOMOS</p>
                    </Col>
                    <Col>
                        <p>QUIENES SOMOS</p>
                    </Col>
                </Row>
                <div className="legales">
                    <p className="text-light">2020, Instituto Mexicano del Cemento y del concreto A.C. Todos Los Derechos Reservados.</p>
                </div>
            </Footer>
        </Layout>
    )
}
