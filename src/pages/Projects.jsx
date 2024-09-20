import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCardNew from "../components/Projects/ProjectCardNew";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import data from '../components/database/localDB.json';
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import LetsConnect from '../components/LetsConnect';
import CustomModel from "../components/Model/CustomModel";
import { Button } from "@mui/material";

const Projects = () => {
 
  const projects = data.projects;
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Button onClick={()=>{setOpen(true)}}>modell</Button> */}
        <Row style={{ justifyContent: "center"}} className="pro_data">
        {projects.projectsList.map((project, index) => (
            <div key={index} className="col-md-4 mb-4"  >
              <ProjectCardNew 
                image={project.image}
                title={project.title}
                category={project.category}
                project={project}
              />
             
            </div>
        
        ))}
          
        </Row>
      </Container>
      <LetsConnect />
    
    </Container>
  )
}

export default Projects