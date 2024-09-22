import React, { useState, useEffect } from "react";
import { Container, Row ,Col, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import './Resume.css';
import Particle from '../components/Particle'
import pdf from "../assets/Resume/ResumeLink.pdf"
import LetsConnect from '../components/LetsConnect';

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import data from '../components/database/localDB.json';
import ResumeLink from "../assets/Resume/ResumeLink.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`


const Resume = () => {
  const [width, setWidth] = useState(700);
  const achievements = data.achievements;

  useEffect(() => {
    
    setWidth(701);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
    
       

        <Row className="resume" >
        <Col md={6} className="achieve">

        <h5>Certifications</h5>
        <div style={{ overflowX: 'auto', color: 'white' }}>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {achievements.achievementsList.map((achievement, index) => (
            <tr key={index}>
              <td>{achievement.title}</td>
              <td>{achievement.company}</td>
              <td>
                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
          
          </Col>
          <Col md={6}>
          <Document file={ResumeLink} className="d-flex justify-content-center pdf-preview">
            <Page  pageNumber={1} scale={width > 786 ? 1.7 : 0.6}  />
          </Document>

          <Button
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",color: "#4CE6A6",
              border: "1px solid #024429",marginTop: '5px', background: 'black' }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          </Col>
          
          
        </Row>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",color: "#4CE6A6",
              border: "1px solid #024429" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row> */}
      </Container>
      <LetsConnect />

      <Particle />
    </div>
  )
}

export default Resume