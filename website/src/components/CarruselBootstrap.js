
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    let aleatorio = (min, max) => {
        let resultado = Math.round(Math.random()*(max - min)) + min;
        return(resultado)
      }
      let aleat = aleatorio(0, props.recetas.length-1) 
    
    const ponerRecetaAleatorio = () => (
        
        
        props.recetas.map((receta, key) => (     
                        

            <Carousel.Item id = {receta._id} >            
                 
            <div className="contenedor-item-carrusel" >
                       
                <div className = "contenedor-descripcion-receta-carrusel">
                    <h1>{receta.name}</h1>
                    <h3>{receta.description}</h3>
                    <Link to = {`/comoSePrepara/${key}`}><p>Como prepararlo </p> <hr/></Link>
                </div>
                                
                <div style={{   backgroundImage: `url( ${receta.url_img} )`,
                                height: '400px',
                                width:'550px',
                                backgroundSize: 'cover',                                       
                                                
                            }} >
                </div> 
            </div>             

        </Carousel.Item>             
              
            
              )        
          )
     
        )
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} indicators= {false} controls = {false} interval = {5000}>      
          
        {/* <Carousel.Item >
            <div className="contenedor-item-carrusel" >
                       
                <div>
                    <h1>Título de la receta</h1>
                    <h3>Descripción de la receta</h3>
                    <a><p>Como prepararlo </p> <hr/></a>
                </div>
                                
                <div style={{   backgroundImage: `url( )`,
                                height: '400px',
                                width:'550px',
                                backgroundSize: 'cover',                                       
                                                
                            }} >
                </div> 
            </div>  
        </Carousel.Item>        */}
         {ponerRecetaAleatorio()}
        
      
        
      </Carousel>

    )
  }



  const mapStateToProps = (reducer) => {
      return reducer.recetasReducer
  }   
  
  export default connect (mapStateToProps) (ControlledCarousel)