import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/sLogo.png";

import data from '../database/localDB.json';

const Footer = () => {
  const home = data.home;
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="copyright" style={{ color: 'gainsboro',backgroundColor: "black",paddingBottom: "20px" }}>
        <p>© Copyright 2024. All rights Reserved. {home.name}</p>
      </div>
     
    );  
}

export default Footer