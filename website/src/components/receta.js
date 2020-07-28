import React from 'react' 
import { connect } from 'react-redux'
import './css/receta.css'
import { Link } from 'react-router-dom'   


const Receta = (props) => {  
    
    const ponerCarnes = () => (
    
        props.recetas.map((receta, key) => (                

          receta.category === "Carnes" ?            
            <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton"> 
              <div className="contenedor-receta" key = {receta._id}>
                <figure className = "imagen-animada">
                  <div style={{ backgroundImage: `url(${receta.url_img})`,
                                height: '250px',
                                backgroundSize: 'cover'   
                              }} >
                  </div>              
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
              
              : "" 

            
              )        
          )
     
        )

    const ponerPostres = () => (
    
      props.recetas.map((receta, key) => (                  

         
           
          receta.category === "Postres" ?            
             <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">
           <div className="contenedor-receta" key = {receta._id}>
            <figure  className = "imagen-animada">
              <div style={{ backgroundImage: `url(  ${receta.url_img})`,
                            height: '250px',
                            backgroundSize: 'cover'   
                          }} >
              </div>              
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
          
          : ""

         
                     
          
        
          )        
      )
   
  )

  const ponerPastas = () => (
    
    props.recetas.map((receta, key) => (                  

        receta.category === "Pastas" ?            
          <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton"> 
         <div className="contenedor-receta" key = {receta._id}>
          <figure  className = "imagen-animada">
            <div style={{ backgroundImage: `url(  ${receta.url_img})`,
                          height: '250px',
                          backgroundSize: 'cover'   
                        }} >
            </div>              
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
        
        : ""   
                     
        
      
        )        
    )
 
)

const ponerGranos = () => (
    
  props.recetas.map((receta, key) => (                  

     
       
      receta.category === "Granos" ?            
      <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">
       <div className="contenedor-receta" key = {receta._id}>
        <figure  className = "imagen-animada">
          <div  style={{ backgroundImage: `url(  ${receta.url_img})`,
                        height: '250px',
                        backgroundSize: 'cover'   
                      }} >
          </div>              
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
      : "" 

     
    
      )        
  )

)

const ponerSopas = () => (
    
  props.recetas.map((receta, key) => (                  

            
      receta.category === "Sopas y Cremas" ?            
      <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">
       <div className="contenedor-receta" key = {receta._id}>
        <figure  className = "imagen-animada">
          <div style={{ backgroundImage: `url(  ${receta.url_img})`,
                        height: '250px',
                        backgroundSize: 'cover'   
                      }} >
          </div>              
        </figure>


        <p className="nombre-receta">{receta.name}</p>

        <div className="receta-datos">
          
          <div>		

        <i className="far fa-user icono"/>
        <p className="texto-gris">{Math.round(receta.servings)} personas</p>
        </div>

        <div>

        <i className="fas fa-stopwatch icono"/>
        <p className="texto-gris">{receta.time}</p>
        </div>
        </div>            		

      </div>            
      
       </Link>
      : "" 
       
      )        
  )

)

const ponerVegetales = () => (
    
  props.recetas.map((receta, key) => ( 
    
    receta.category === "Vegtariana" ?            
      <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">
       <div className="contenedor-receta" key = {receta._id}>
        <figure  className = "imagen-animada">
          <div style={{ backgroundImage: `url(  ${receta.url_img})`,
                        height: '250px',
                        backgroundSize: 'cover'   
                      }} >
          </div>              
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
      
      : "" 

     
    
      )        
  )

)
    
        return(
          <div>
            <div >

               <div className="titulo-seccion" id= "carnes">
                 <h1>Carnes</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerCarnes() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion" id= "postres">
                 <h1>Postres</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerPostres() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion" id= "pastas">
                 <h1>Pastas</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerPastas() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion" id= "granos">
                 <h1>Granos</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerGranos() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion" id= "sopas">
                 <h1>Sopas</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerSopas() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion" id= "vegetarianos">
                 <h1>Vegetarianos</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerVegetales() }                                  

                 </div>              
           
            
          </div> 

          </div>
          
          
       
        )
    
}

const mapStateToProps = (reducers) => {
    return reducers.recetasReducer
}

export default connect (mapStateToProps)(Receta)