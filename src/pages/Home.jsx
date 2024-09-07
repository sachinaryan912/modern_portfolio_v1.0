import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/main_img_grey.png'
import bgBlur from '../assets/images/bg_blur.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import data from "../components/database/localDB.json"

const Home = () => {
  const home = data.home;
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <img src={bgBlur} alt="" srcset="" className='test'/>
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi ! I'm {home.name}.{" "}
              </h1>

              

              <div style={{textAlign: "left" }} className='jobPos'>
                <Type />
              </div><br />
              <p style={{color: "#787878"}}>{home.compactAbout}</p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} >
            
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
       
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home