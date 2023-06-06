import Header from "../components/Header";
import Footer from "../components/Footer";
import { Image, Col, Container, Row } from "react-bootstrap";
import "../index.css";
import "../new.css";
import Particle from "../components/Particle";
import Type from "../components/Type";
import Welcome2 from "./Welcome2";
import Projects from "./Projects";
import React from "react";
import Contact from "./Contact";
function WelcomeScreen() {
  return (
    <React.Fragment>
      <Header></Header>

      <Container fluid className="home-section" id="home" >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="bleu"> BENHAFSA Ilhem</strong>
              </h1>
              <div className="fro" style={{ padding: 50, textAlign: "left" }}>
                <strong>
                  <Type />
                </strong>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src={"/images/reac.svg"}
                style={{ width: "300px", height: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Welcome2 />
      <Projects />
      <Contact />

      <Footer></Footer>
    </React.Fragment>
  );
}

export default WelcomeScreen;
