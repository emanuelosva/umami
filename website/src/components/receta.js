import React from 'react' 
import { connect } from 'react-redux'
import './css/receta.css'
import { Link } from 'react-router-dom'   


const Receta = (props) => {  
    
    const ponerCarnes = () => (
    
        props.recetas.map((receta, key) => (                  

            <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
              
              {receta.category === "Carnes" ?            
                
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
              
              
              : <div style = {{ display:"none"}}></div> }

            
            </Link>                
              
            
              )        
          )
     
        )

    const ponerPostres = () => (
    
      props.recetas.map((receta, key) => (                  

        <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
           
          {receta.category === "Postres" ?            
            
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
          
          
          : "" }

         
        </Link>                
          
        
          )        
      )
   
  )

  const ponerPastas = () => (
    
    props.recetas.map((receta, key) => (                  

      <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
         
        {receta.category === "Pastas" ?            
          
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
        
        
        : "" }

       
      </Link>                
        
      
        )        
    )
 
)

const ponerGranos = () => (
    
  props.recetas.map((receta, key) => (                  

    <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
       
      {receta.category === "Granos" ?            
        
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
      
      
      : "" }

     
    </Link>                
      
    
      )        
  )

)

const ponerSopas = () => (
    
  props.recetas.map((receta, key) => (                  

    <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
       
      {receta.category === "Sopas y Cremas" ?            
        
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
      
      
      : "" }

     
    </Link>                
      
    
      )        
  )

)

const ponerVegetales = () => (
    
  props.recetas.map((receta, key) => (                  

    <Link to = {`/comoSePrepara/${key}`} className="decoracion-boton">  
       
      {receta.category === "Vegtariana" ?            
        
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
      
      
      : "" }

     
    </Link>                
      
    
      )        
  )

)
    
        return(
          <div>
            <div >

               <div className="titulo-seccion">
                 <h1>Carnes</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerCarnes() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion">
                 <h1>Postres</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerPostres() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion">
                 <h1>Pastas</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerPastas() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion">
                 <h1>Granos</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerGranos() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion">
                 <h1>Sopas</h1>
                 </div>

                 <div className = "receta-caja">
                       {ponerSopas() }                                  

                 </div>              
           
            
          </div> 

          <div >

               <div className="titulo-seccion">
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