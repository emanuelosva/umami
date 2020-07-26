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
import { connect } from 'react-redux'
// import * as recetasActions from './actions/carrtioActions'

import * as recetasActions from './actions/recetasActions'
import * as preparacionActions from './actions/preparacionActions'
import * as carritoActions from './actions/carrtioActions'

import Modal from './modal/modal'

const { traerPorReceta: datosParaReceta } = preparacionActions 


class Template extends React.Component {

    state = {
        abierto:false
    }


    componentDidMount() {
        this.props.guardarRecetas()
    }  

    handleClick = () => {
        this.setState({abierto: !this.state.abierto})
      }
   
 
  

    render() {       
            return(

            <div className = "barra-superior ">  
                <div className="barra-superior-desktop" >

                    <nav>
                    <div className="umami_image">
                        <Link to="/"> <img src={logoUmami} alt=""/></Link>
                    </div> 
                    <div className="nav_options">
                        <ul>
                            <li><NavDropdown title="Comidas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#carnes">Carnes</NavDropdown.Item>
                                <NavDropdown.Item href="#postres">Postres</NavDropdown.Item>
                                <NavDropdown.Item href="#pastas">Pastas</NavDropdown.Item>                                
                                <NavDropdown.Item href="#granos">Granos</NavDropdown.Item>
                                <NavDropdown.Item href="#sopas">Sopas</NavDropdown.Item>
                                <NavDropdown.Item href="#vegetarianos">Vegetariano</NavDropdown.Item>

                            </NavDropdown> </li>
                            <li>
                                <div className="main-input-container">
                                    
                                    <input className="main-input" type="text"/>
                                    <a href=""></a>
                                    <span className="search-icon">
                                        <img src={findImage} alt=""/>
                                    </span>

                                </div>
                            </li>
                            <li><button href="#link" onClick={this.handleClick} >Entrar/registro</button></li>
                            <li><Link to="/carrito">Carrito<img src ={carritoCompras} alt=""/></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>     

                <div className="barra-superior-responsive">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home"><Link to="/"> <img src={logoUmami} alt=""/></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Carrito</Nav.Link>
                                <button href="#link" onClick={this.handleClick}>Registrese/entrar</button>

                                <Modal isOpen = {this.state.abierto} onClose = {this.handleClick}/>

                                <NavDropdown title="Comidas" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#carnes">Carnes</NavDropdown.Item>
                                    <NavDropdown.Item href="#postres">Postres</NavDropdown.Item>
                                    <NavDropdown.Item href="#pastas">Pastas</NavDropdown.Item>                                
                                    <NavDropdown.Item href="#granos">Granos</NavDropdown.Item>
                                    <NavDropdown.Item href="#sopas">Sopas</NavDropdown.Item>
                                    <NavDropdown.Item href="#vegetarianos">Vegetariano</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                    
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
                                   </li>
                                <li><a href="#">Entrar / registro</a></li>
                            </ul>
                            
                        </footer>
                    
                   
               
                </div>
           
        )
}
}

const mapStateToProps = (reducers) => {
    return reducers.clienteCarrito, reducers.recetasReducer
}

const mapDispatchToProps = {
    ...recetasActions,
    datosParaReceta,
    ...carritoActions
}

export default connect(mapStateToProps, mapDispatchToProps) (Template)

