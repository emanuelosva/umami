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

import logoUmami from '../assets/logo-umami.png'
import findImage from '../assets/find.png'
import carritoCompras from '../assets/carrito-compras.png'



class Template extends React.Component {

    render() {    
        return(

            <div className = "barra-superior ">  
                <div >

                    <nav>
                    <div className="umami_image">
                        <a href="#"> <img src={logoUmami} alt=""/></a>
                    </div> 
                    <div className="nav_options">
                        <ul>
                            <li><a href="#">Categorias</a> </li>
                            <li>
                                <div className="main-input-container">
                                    
                                    <input className="main-input" type="text"/>
                                    <a href=""></a>
                                    <span className="search-icon">
                                        <img src={findImage} alt=""/>
                                    </span>

                                </div>
                            </li>
                            <li><a href="#">Entrar / registro</a></li>
                            <li><a href="#">Carrito<img src ={carritoCompras} alt=""/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>

                    
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

                         <footer className= "footer">
                            <figure className="contenedor-logo-imagen">
                                <div className="umami_image">
                                    <a href="#"> <img src={logoUmami} alt=""/></a>
                                </div>
                                
                                <p>Página diseñada para que todos podamos ser chef alguna vez <br/>
                                en la vida y para dejar una sensación agradable a nuestros seres queridos</p>
                            </figure>
                            <hr className="separador-footer"/>
                            <ul className="contenedor-creditos-footer">
                                <li>Toda la informacion es tomada de: <br/><br/><a href="#">www.abc.com</a></li>
                                <li> Diseño y maquetación:<br/><br/>
                                    Nelson Alayon <br/>
                                    Jaime Piratova</li>
                                <li> Backend:<br/><br/>
                                    Enmanuel Osorio <br/>
                                    Mario Barbosa <br/>
                                    Esteban Mongui <br/>
                                    Andres moreno</li>
                                <li><a href="#">Entrar / registro</a></li>
                            </ul>
                            
                        </footer>
                    
                   
               
                </div>
           
        )
}
}

export default Template