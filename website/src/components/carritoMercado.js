import React from 'react'
import Button from 'react-bootstrap/Button'
import carritoImagen from '../assets/carrito-compras.png'
import Spinner from './Spinner'
import Fatal from './fatal'

import { connect } from 'react-redux'

import * as recetasActions from './actions/recetasActions'
import * as preparacionActions from './actions/preparacionActions'
import * as carritoActions from './actions/carrtioActions'



const { traerPorReceta: datosParaReceta } = preparacionActions 


class carritoMercado extends React.Component {  

    async componentDidMount () {    


        if(!this.props.recetasReducer.recetas.length) {
          await this.props.traerTodasRecetas()
        }

        if(this.props.recetasReducer.error) {
            return;
        }      
       
        
    }  

    ponerRecetasSeleccionadas = () => {

        if( this.props.recetasReducer.error) {
            return(<Fatal mensaje={this.props.recetasReducer.error}/>)

        }

        if (!this.props.recetasReducer.recetas.length || this.props.recetasReducer.cargando) {
            return (<Spinner/>)
        }

          
        
        
        return (
            this.props.clienteCarrito.carrito.map((receta) => {
                if(receta===undefined) {
                    return ""
                }
                return(
                    <div>

                        {console.log(`Esto es receta ${receta}`)}        
           

              <div className= "contenedor-receta-agregada">
               
                <figure className="imagen-receta-agregada">
                    <div style = {{
                        width : "120px",
                        height: "120px",
                        backgroundImage: `url(${this.props.recetasReducer.recetas[receta].url_img})`,
                        backgroundSize: "cover",
                        borderRadius: "50%",
                        border: "1px solid black",
                        margin: "30px"
                    }}>

                    </div>           
                        
                </figure>
                <div>
                     <p className="nombre-receta">{this.props.recetasReducer.recetas[receta].name}</p>
                    <p className = "texto-preparacion">{this.props.recetasReducer.recetas[receta].description}</p>
                </div>
                <div>
                     <p className = "texto-preparacion">costo: ${this.props.recetasReducer.recetas[receta].price}</p>
                </div>                 
                  <Button onClick = {() => this.props.borrarRecetas(receta)} variant="light">X</Button> 
                  {/* <button onClick = {() => this.props.guardarRecetas(llave)}>agregue la receta</button> */}
            </div>
           
            
        </div>
                )
            })
            
           
        )
    };
    
    render() {
        
        console.log(`esto es this.props.usuariosCarritoReducer.carrito: ${this.props.carrito}`)
        
         return (
             <div>

                <div className = "espaciador"></div>
                <div className = "titulo-receta-Agregada"> <img src = {carritoImagen}/> <h1>Carrito</h1></div>
                  {this.ponerRecetasSeleccionadas()} 
                  <div className= "contenedor-boton-continuar">
                <div class="boton-receta">
                <a href="#" class="boton">Continuar</a>
                <hr></hr>

            </div>  
            </div>
             </div>
                   
  
        )
    }
    
   
}

const mapStateToProps = ({recetasReducer, preparacionReducer, clienteCarrito }) => {
    return {recetasReducer,
        preparacionReducer, 
        clienteCarrito}

}



const mapDispatchToProps = {
    ...recetasActions,
    datosParaReceta,
    ...carritoActions
}
export default connect (mapStateToProps, mapDispatchToProps)(carritoMercado)