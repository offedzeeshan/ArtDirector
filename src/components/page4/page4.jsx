import './page4.css'

import { Col, Row, Container } from "react-bootstrap";
import page42 from './page42.png'
export const Page4 = () => {
    return (
        <section className='section'>
            <Container className="main">
                <Row>
                    <Col className='col1' xs={12} md={6} lg={6} xl={6}>
                    {/* <img  className='img-fluid page41' src={page41} /> */}

                    </Col>
                    <Col  xs={12} md={6} lg={6} xl={6}>
                    <img  className='img-fluid page42' src={page42} />
                    </Col>
                </Row>
            </Container>
            </section>
            
    )
}
