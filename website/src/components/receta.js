import React from 'react' 
import { connect } from 'react-redux'
import './css/receta.css'
import { Link } from 'react-router-dom'

const Receta = (props) => {
    console.log(props)
    const ponerRecetas = () => (
      
        props.recetas.map((receta, key) => (
          <Link to = {`/comoSePrepara/${key}`}>
            
          <div className="contenedor-receta" key = {receta._id}>
            <figure>
              <img className = "foto-receta" src={receta.url_img} alt={receta.name} width = "100%" />
            </figure>


            <p className="nombre-receta">{receta.name}</p>

            <div className="receta-datos">
              
              <div>		

            <i className="far fa-user icono"></i>
            <p className="texto-gris">{Math.round(receta.servings)} personas</p>
            </div>

            <div>

            <i className="fas fa-stopwatch icono"></i>
            <p className="texto-gris">{receta.time}</p>
            </div>
            </div>            		

	        </div>
          </Link>

                   
            
          
            )         
        )
      
    )
    
        return(
          
             <div className = "receta-caja">
               {ponerRecetas()}
               
             

              {/* <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.freeimages.com/images/large-previews/241/night-fog-1521028.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.freeimages.com/images/large-previews/aba/willow-tree-1181662.jpg"
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
                    src="https://images.freeimages.com/images/large-previews/b61/spring-is-here-1531506.jpg"
                    alt="Third slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}          
            
          </div>  
       
        )
    
}

const mapStateToProps = (reducers) => {
    return reducers.recetasReducer
}

export default connect (mapStateToProps)(Receta)