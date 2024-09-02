import { Col, Row, Container } from "react-bootstrap";
import './page2.css'
import Page21 from './page21.png'
import Cntct from './cntct.png'
import Info from './info.png'
import Exp from './exp.png'

export const Page2 = () => {
  return (
    <section>
      <Container className="main">
        <Row>
          <Col xs={12} md={7} lg={7} xl={7} >
          <img className='img-fluid page21' src={Page21} />

          </Col>

          <Col xs={12} md={5} lg={5} xl={5} >

            <img className='img-fluid cntct' src={Cntct} />
            <img className='img-fluid info' src={Info} />
            <img className='img-fluid exp' src={Exp} />

          </Col>
         
        </Row>
      </Container>
    </section>
  )
}