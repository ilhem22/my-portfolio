import {  Col,Container,Row } from 'react-bootstrap';
import '../new.css';

import firstimage from '../Asset/ensemble.PNG'
import secondimage from '../Asset/odlogo.png'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Projects() {
    return (
        <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <Row>
        <Col md={7} >
            
            <h1 style={{ fontSize: "2.6em" }} >
              My recent  <strong className="bleu"> Works </strong>
            </h1 >
            <p style={{ color: "black" ,fontSize: "1.3em" } }  >
          Here are a few projects I've worked on recently.
        </p>
        </Col>
        </Row>
        <Row>
        <Col md={4} className="project-card">
        <Card>
            <Card.Img variant="top" src={firstimage} alt="card-img" style={{ width: "363px", height: "250px" }} />
            <Card.Title className="rose" > <strong style={{ fontSize: "1.3em" }} >Ecommerce handbags website </strong></Card.Title>
            <Card.Text  style={{ textAlign: "justify" }}>
              <strong > Tools : <i class="fa-brands fa-react" style={{ fontSize: "2em" }} ></i>
              <i class="fa-brands fa-bootstrap mx-3" style={{ fontSize: "2em" }}></i>
              </strong>
           </Card.Text>
              
          

            <div className="button-container my-3">
              <Button className="button" >
              <i class="fa-solid fa-desktop" href="https://e-commerce-w.onrender.com/?fbclid=IwAR3CG057zl8g9YCHifB-_FvEJj5BBYI55DZa-dpJoMwy79VX9ZuNtx4c-50"></i>
                Demo
                
              </Button>
             
              <Button className="button" href="https://github.com/ilhem22/E-commerce-fronted-website">
               <i class="fa-brands fa-github"></i>
                Github
          
              </Button>
          </div>
         </Card>

             
              
          </Col>
          <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={secondimage} alt="card-img" style={{ width: "363px", height: "250px" }} />
            <Card.Title className="rose y-4" > <strong style={{ fontSize: "1.3em" }} >Odoo Module <br></br> Gestion d'une agence de véhicules </strong></Card.Title>
            <Card.Text  style={{ textAlign: "justify" }}>
              <strong > Tools :<i class="fa-brands fa-python"style={{ fontSize: "2em" }}></i>
              
              </strong>
           </Card.Text>
              
          

            <div className="button-container my-3">
              <Button className="button" href="https://www.linkedin.com/feed/update/urn:li:activity:7071855942031597568/">
              <i class="fa-solid fa-desktop" ></i>
                Demo
                
              </Button>
             
              <Button className="button" href="https://github.com/ilhem22/Module-odoo">
               <i class="fa-brands fa-github"></i>
                Github
          
              </Button>
          </div>
         </Card>
            </Col>
          </Row>
        </Container>
        </Container>

            );
            }
            
 export default Projects;