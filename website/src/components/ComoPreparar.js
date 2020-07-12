import React from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import fatal from './fatal'

import * as recetasActions from './actions/recetasActions'
import * as preparacionActions from './actions/preparacionActions'
import Fatal from './fatal'

const { traerPorReceta: datosParaReceta } = preparacionActions


class Preparacion extends React.Component {
   async componentDidMount () {

        const {
            recetasTraerTodos,
            preparacionTraerPorReceta,
            match: { params: { key } }
        } = this.props


        if(!this.props.recetasReducer.recetas.length) {
          await this.props.traerTodasRecetas()
        }

        if(this.props.recetasReducer.error) {
            return;

        }

        if(!('preparaciones_key' in this.props.recetasReducer.recetas[this.props.match.params.key])) {
            this.props.datosParaReceta(this.props.match.params.key);
        }       
        
    }

    ponerPreparacion = () => {

        if( this.props.recetasReducer.error) {
            return(<Fatal mensaje={this.props.recetasReducer.error}/>)

        }

        if (!this.props.recetasReducer.recetas.length || this.props.recetasReducer.cargando) {
            return (<Spinner/>)
        }

        const nombreReceta = this.props.recetasReducer.recetas[this.props.match.params.key].name
        const description = this.props.recetasReducer.recetas[this.props.match.params.key].description
        const image = this.props.recetasReducer.recetas[this.props.match.params.key].url_img
        const porciones = this.props.recetasReducer.recetas[this.props.match.params.key].servings
        const time = this.props.recetasReducer.recetas[this.props.match.params.key].time
        const ingredientes = this.props.recetasReducer.recetas[this.props.match.params.key].ingredients 
        const pasos = this.props.recetasReducer.recetas[this.props.match.params.key].instructions
        
        return (
            <div>
                <h1>preparación de {nombreReceta} </h1>
                <h1>descripcion de {nombreReceta} : {description} </h1>
                <h1>imagen de  {nombreReceta} : <img src={image} alt = {nombreReceta}></img> </h1>
                <h1>porciones de {nombreReceta}: {porciones} </h1>
                <h1>tiempo de preparación de {nombreReceta}: {time} </h1>

                <div>{ingredientes.map((ingrediente) => <p> {ingrediente} </p>)}</div>
                <div>{pasos.map((paso) => <p> {paso} </p>)}</div>
            </div>
           
        )
    };

    ponerPreparacionIngredientes = () => {
        
        console.log(`Esto es lo que hay en this.props.preparacionReducer: ${this.props.preparacionReducer.preparacion}`)
        if(!this.props.recetasReducer.recetas) {
            return  <h1>recetas</h1>
        }

        if(this.props.recetasReducer.error) {
            return <h1>error</h1>

        }

        if(this.props.preparacionReducer.cargando) {
            return <Spinner/>
        }

        if(this.props.preparacionReducer.error) {
            return <Fatal mensaje= {this.props.preparacionReducer.error}/>
        }

        if(!this.props.preparacionReducer.length) {
            return  <h1>no hay nada</h1>
        }

        if(!('preparacion_key' in this.props.recetasReducer.recetas[this.props.match.params.key])) {
            return  <h1>no esta preparacion key</h1>
        }

        

        // return (
        //     this.props.preparacionReducer.preparacion[this.props.match.params.key].map((pasos) => {
        //     <div>
        //         <h2>hola</h2>
        //     </div>
        // })
        // )
        
        
        
    }
    render() {

        console.log(this.props)
       
        return(
            
        <div>
            
            {this.ponerPreparacion()}
            {/* {this.ponerPreparacionIngredientes()} */}
        </div>
            
        )
    }
}
const mapStateToProps = ({recetasReducer, preparacionReducer}) => {
    return {recetasReducer, 
    preparacionReducer}

}

const mapDispatchToProps = {
    ...recetasActions,
    datosParaReceta
}
export default connect (mapStateToProps, mapDispatchToProps)(Preparacion)