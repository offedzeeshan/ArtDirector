import './page6.css'

import { Col, Row, Container } from "react-bootstrap";
import page61 from './page61.png'
import page62 from './page62.png'
import deltin from './deltin.png'
import majestic from './majestic.png'
import bigdaddy from './bigdaddy.png'
export const Page6 = () => {
    return (
        <section className='img-fluid page6'>
<Container>
                <Row>
                    <Col xs={12} md={6} lg={6} xl={6}>
                    <img  className='img-fluid page61' src={page61} />

                    </Col>
                    <Col xs={12} md={6} lg={6} xl={6}>
                    <img  className='img-fluid page62' src={page62} />
                   
                    </Col>
                </Row>
            </Container>
            <div className='wable'>
            <Row>
                    <Col className='container'>
                    <img  className='hola child bounce' src={deltin} />

                    </Col>
                    <Col className='container' >
                    <img  className='hola child bounce' src={majestic} />
                   
                    </Col>
                    <Col className='container'>
                    <img  className='hola child bounce' src={bigdaddy} />
                   
                    </Col>
                </Row>
           
            </div>
        </section>
    )
}