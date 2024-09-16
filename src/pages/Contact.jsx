import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import { Box, Grid } from '@mui/material';
import ContactFormNew from '../components/Contact/ContactFormNew';
import SocialNew from '../components/Contact/SocialNew';

const Contact = () => {




  // return <Grid container>
  //   <Grid item xs={6}>
  //     <ContactFormNew/>
  //     </Grid>
  //   <Grid item xs={6}>
  //     <Box sx={{height:'40vh',width:'20vh',color:'red'}}>Heeeeeeeeeee</Box>

  //   </Grid>

  // </Grid>
  return (
    <Container style={{width:'100%',backgroundColor:"black"}}>
      <Particle />
      <Container style={{paddingTop:'10%'}}>
        <Row>
        <Col md={12} className="c-left" style={{backgroundColor: "#000"}}>
        <h1 style={{color:'white'}}>Let's Connect!</h1>
      <p style={{color:'#B8B8B8'}}>
        I'm always open to new opportunities and conversations. Whether you have
        a project idea, want to collaborate, or just want to chat, feel free to
        reach out. Let's connect and make great things happen together!
      </p>
        </Col>
          <Col md={6}>
          <Box sx={{marginLeft:'0%',alignItems: "center"}} ><ContactForm/></Box>
          </Col>
          <Col md={6}>
          <SocialNew />
          </Col>

        </Row>
      </Container>
      {/* <ContactForm /> */}
      {/* <Social /> */}
    </Container>
  )
}

export default Contact