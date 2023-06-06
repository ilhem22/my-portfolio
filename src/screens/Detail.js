import { Col,Container,Row } from 'react-bootstrap';
import '../new.css';
import Header from "../components/Header";
import React from "react";
function Detail() {
    return (
      <React.Fragment>
      <Header></Header>

        <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <Row>
        <Col md={7} >
            
            <h1 style={{ fontSize: "2.6em" }} >
            <strong className="bleu">  E-commerce </strong> website screens  
            </h1 >
            <p style={{ color: "white" ,fontSize: "1em" } }  >
          Here are a few projects I've worked on recently.
        </p>
        </Col>
        </Row>
        </Container>
        </Container>
        </React.Fragment>
    );
} 
export default Detail;