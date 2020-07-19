import React from 'react'
import '../App.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'



class Template extends React.Component {

    render() {    
        return(

           
                <div className = "barra-superior ">
                    {/* <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/receta">Receta</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/desayuno">Desayunos</NavDropdown.Item>
                                <NavDropdown.Item href="/Almuerzos">Almuerzos</NavDropdown.Item>
                                <NavDropdown.Item href="/Comida">Comidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cenas Románticas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Comidas con amigos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>                        
                        </Navbar.Collapse>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                            </Form>
                    </Navbar> */}
                    
                         {this.props.children}
                    
                   
                </div>
           
        )
}
}

export default Template