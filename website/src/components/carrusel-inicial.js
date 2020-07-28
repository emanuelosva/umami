import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

class CarruselInicial extends React.Component {

    

    render() {
        return(

            <div className= "contenedor-item-carrusel">
                {/* <div>
                      <h1>Título de la receta</h1>
                        <h3>Descripción de la receta</h3>

                        <a><p>Como prepararlo </p> <hr/></a>
                </div>

                <div style = {{
                    padding: '25px'
                }}>
                    <div style={{ backgroundImage: `url(  'https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563801848_984792_1563804092_noticia_normal.jpg')`,
                              height: '400px',
                              width:'550px',
                              backgroundSize: 'cover',
                                
                            }} >
                </div>  
                </div> */}

                <Carousel>                    
                    
                    <Carousel.Item >
                        <Container >

                            <div className="contenedor-item-carrusel" >
                       
                                <div>
                                        <h1>Título de la receta</h1>
                                        <h3>Descripción de la receta</h3>
                                        <a><p>Como prepararlo </p> <hr/></a>
                                </div>
                                
                                <div style={{ backgroundImage: `url(  'https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563801848_984792_1563804092_noticia_normal.jpg')`,
                                        height: '400px',
                                        width:'550px',
                                        backgroundSize: 'cover',
                                        
                                            
                                        }} >
                                </div> 
                        </div>
  
                        </Container>         
                        
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

           
        )
    }
}


export default CarruselInicial