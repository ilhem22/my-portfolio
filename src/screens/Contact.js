import { Container,} from 'react-bootstrap';
import '../new.css';
import Card from "react-bootstrap/Card";

import React from "react";
import '../new.css';

function Detail() {
    return (
      <React.Fragment>
      

        <Container fluid className="home-section" id="home">
        <Container className="home-content">
       
            
        <Container className="text-center">
            <strong className='center' style={{ fontSize: "2.6em" }}> Get in Touch </strong>
         </Container>
         <Card className="card"  >
         <Card.Body>
         <Container className="text-center" style={{ fontSize: "1.6em" }}>
            <strong>
            <i class="fa-sharp fa-solid fa-envelope mx-3"></i>
            
            benhafsailhem22@gmail.com
            <br></br>
            <i class="fa-solid fa-phone mx-3"></i>
             0541 45 83 65
            </strong>
        
           
            </Container>

         </Card.Body>
         </Card>
           
        
        </Container>
        </Container>
        </React.Fragment>
    );
} 
export default Detail;