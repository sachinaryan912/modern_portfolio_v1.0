import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5
} from "react-icons/si";
import {skillData} from "../../components/database/SkillDb"

const Techstack = () => {
  
   return <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {
     skillData?.map((obj)=>{
   
      return  <>
      <Col xs={6} md={2} className="tech-icons">
        {obj?.icon} <br></br>{obj?.name}
      </Col>
       {/* <Col xs={2} md={2} className="tech-icons">
       {obj?.name}
     </Col> */}
      </>
      
     })
    }
     </Row>
    
    
   
}

export default Techstack;
