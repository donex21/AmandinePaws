import React from 'react'
import { Navbar,  Container, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import dataservice from '../service/dataservice';


function HeaderNavBar(props) {

  const { auth } = props;
  let emailAdd = auth.email;
  let username = emailAdd.split("@");

  const logout= () =>{
    dataservice.logout();
    window.location.href = '/'
  }

    return (      
        <Navbar collapseOnSelect expand="lg" className="navBG" variant="dark">
        <Container>
        <Navbar.Brand href="Home">
            <h3 className = "NavFOntColor">Amandine Paws</h3>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <NavDropdown title="Manage User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="Veterinarian">Veterinarian</NavDropdown.Item>
              <NavDropdown.Item href="PetBoarding">Pet Boarding</NavDropdown.Item>
              <NavDropdown.Item href="PetStore">Pet Store</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="PetOwner">Pet Owner</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="AdminInfo">About Admin</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
               <h5> Welcome {username[0]} </h5>
            </Nav.Link>
            <Nav.Link onClick={logout}>
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

const mapStateToProps = (state) =>{
  return{
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps) (HeaderNavBar);
