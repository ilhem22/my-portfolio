import React from 'react'
import {Navbar, Nav, Container,    } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../new.css';

function Header() {
  return (
    
      <header> 

    <Navbar className='nav' variant='dark' expand="lg" collapseOnSelect>
      <Container>

        <LinkContainer to="/">
         <Navbar.Brand className='nav-brand'><h3>Portfolio</h3></Navbar.Brand>
         </LinkContainer>
      

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-item" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-item">

          <LinkContainer to="/about" className="nav-item">
          
            <Nav.Link>
            
              <i class="fa-solid fa-circle-info"></i>
              
              <span>About</span>
              
            </Nav.Link>
            
            </LinkContainer>

            <LinkContainer to='/work' className="nav-item">

              <Nav.Link><i class="fa-solid fa-briefcase"></i>Work</Nav.Link>
            </LinkContainer> 
            
              <LinkContainer to='/home' className="nav-item">

                <Nav.Link><i class="fa-solid fa-address-book"></i>Contact</Nav.Link>
              </LinkContainer> 

           
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      
    </Navbar>

        
      </header>
    
  )
}

export default Header
