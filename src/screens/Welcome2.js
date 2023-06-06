import { Image, Col,Container,Row } from 'react-bootstrap';
import '../new.css';

function Welcome2() {
    return (
        <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <Row>
        <Col md={7} >
            
            <h1 style={{ fontSize: "2.6em" }} className="bleu" >
              LET ME  INTRODUCE  MYSELF
            </h1 >
            <br></br>
            <h2 style={{ fontSize: "1.6em" }}>I’m a software engineer specializing in the design and  the implementation of user interfaces using React (a front-end JavaScript library).</h2> 
            <br /><h2 style={{ fontSize: "1.6em" }}> I am passionate and curious to learn new things in the world of web application development and design .</h2>
        </Col>
        
        <Col md={5} style={{ paddingBottom: 20 }}>
                <Image src={'/images/rose.png'} style={{ width: '300px', height: '300px'}} />
        </Col>
        </Row>
        </Container>
        </Container>    
    );

}
export default Welcome2;