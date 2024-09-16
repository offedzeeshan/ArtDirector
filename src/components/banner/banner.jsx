// import React from 'react'
import './banner.css'
import { Col, Row, Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
// import {Bootstrap}
import headerimage from './headerimg.png'
import headertxt from './headertxt.png'
import gd from './gd.png'
import te from './te111.png'

export const Banner = () => {
  return (
<section className='banner'>
{/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active link-secondary" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-secondary" href="#">Work</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-secondary" href="#">Skills</a>
  </li>
  
</ul> */}
    <Container>
      <Row>
        <Col xs={12} md={6} lg={6} xl={6} >
          <img className='img-fluid headerimg' src={headerimage} />
          <img className='img-fluid te' src={te} />
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}  >
          <img className="img-fluid tullu"  src={headertxt} />
          <p className="text-center bannerp">
            I’m Saad Kaif, Speaking of which is a Sr. Graphic Designer, Video Editor & Animation Artist
            focusing on creating emotional experiences at the intersection
            of art, design & Ai. I’m leading at 10+ year Expertise
          </p>
        </Col>
      </Row>
    </Container>
    <img src={gd} className="img-fluid gd " alt="..."></img>
    </section>
    

  );
}
{/* <div className='banner img-fluid'>
        
            <Col xs={12} md={6} xl={7}>
              <img className="headerimg img-fluid" src={headerimage} />
              <Col />
              <Col xs={12} md={6} xl={5}>

                <img className="headertxt" src={headertxt} />
                <p className=" align-items-center text-center ">
                  I’m Saad kaif, Speaking of which is a Sr. Graphic Designer
                  focusing on creating emotional experiences at the intersection
                  of art, design & Ai. I’m leading at 10+ year Expertise
                </p>
              <Col />
              
        </div> */}

