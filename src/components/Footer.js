import React from 'react'
import { Row , Col } from 'react-bootstrap'
import '../new.css';
function Footer() {
  return (
    
      <footer class="text-black  " style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} >
        <Row >
        
        <div className="text-center py-3">
          <h className="mx-3 my-5"> <strong> Find me on social networks: </strong></h>
          <br/> <br/>
          <a
                href="https://www.facebook.com/ilhem.ben.1654/"
                style={{ color: "purple" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
            <i class="fab fa-facebook-f mx-2"></i>
          </a>
          <a
                href="https://twitter.com/BenhafsaI"
                style={{ color: "purple" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
    
          <i class="fa-brands fa-twitter"></i>
          </a>
          <a
                href="https://www.linkedin.com/in/ilhem-benhafsa-4749b21a3/"
                style={{ color: "purple" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
    
                 <i class="fab fa-linkedin mx-2"></i>
             </a>
             <a
                href="https://github.com/ilhem22"
                style={{ color: "purple" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <i class="fab fa-github mx-2"></i>
               </a>
        </div>
        
        
        </Row>
        
       

          <Row >
            <Col className=" text-center py-3 "  expand="xl" >
             Copyright &copy; Devloped by <strong className="purple"> BENHAFSA Ilhem <i class="fa-regular fa-gem"></i> </strong>
            </Col>
          </Row>
      
      </footer>
    
  )
}

export default Footer
