import React from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import './css/preparacion.css'
import Fatal from './fatal'

import * as recetasActions from './actions/recetasActions'
import * as preparacionActions from './actions/preparacionActions'

import * as carritoActions from './actions/carrtioActions'

import imagenPreparacion from '../assets/ingredientes.png'
import usuariosCarritoReducer from '../components/reducers/usuariosCarritoReducer'

const { traerPorReceta: datosParaReceta } = preparacionActions

class Preparacion extends React.Component {


    async componentDidMount() {



        if (!this.props.recetasReducer.recetas.length) {
            await this.props.traerTodasRecetas()
        }

        if (this.props.recetasReducer.error) {
            return;

        }

        if (!('preparaciones_key' in this.props.recetasReducer.recetas[this.props.match.params.key])) {
            this.props.datosParaReceta(this.props.match.params.key);
        }

    }

    ponerPreparacion = () => {

        if (this.props.recetasReducer.error) {
            return (<Fatal mensaje={this.props.recetasReducer.error} />)

        }

        if (!this.props.recetasReducer.recetas.length || this.props.recetasReducer.cargando) {
            return (<Spinner />)
        }

        const nombreReceta = this.props.recetasReducer.recetas[this.props.match.params.key].name
        const description = this.props.recetasReducer.recetas[this.props.match.params.key].description
        const image = this.props.recetasReducer.recetas[this.props.match.params.key].url_img
        const porciones = this.props.recetasReducer.recetas[this.props.match.params.key].servings
        const time = this.props.recetasReducer.recetas[this.props.match.params.key].time
        const ingredientes = this.props.recetasReducer.recetas[this.props.match.params.key].ingredients
        const pasos = this.props.recetasReducer.recetas[this.props.match.params.key].instructions
        const category = this.props.recetasReducer.recetas[this.props.match.params.key].category
        const imageIngredient = this.props.recetasReducer.recetas[this.props.match.params.key].url_ingredient

        const llave = parseInt(this.props.match.params.key)

        console.log(`Esto es this.props.match: ${this.props.match.params.key}`)



        return (
            <div>

                <div style={{
                    height: "220px"
                }}></div>

                <div className="receta-preparacion" style={{
                    backgroundImage: `url(  ${image})`,
                    height: '400px',
                    backgroundSize: 'cover',

                }} >

                    <div className="receta-preparacion-caja-texto">

                        <div>
                            <h1>{nombreReceta}</h1>
                        </div>

                        <div>
                            <h3>{description}</h3>
                        </div>

                    </div>
                </div>

                <div className="descripcion-preparacion-receta">
                    <div> <p className="nombre-receta">{category}</p> </div>
                    <div> <p className="nombre-receta"> <i className="far fa-user icono" /> {Math.round(porciones)} personas </p></div>
                    <div>  <p className="nombre-receta"> <i className="fas fa-stopwatch icono" /> {time}</p> </div>
                </div>

                <div class="titulo-seccion"><h1>Ingredientes</h1></div>

                <div className="receta-caja">

                    {ingredientes.map((ingrediente) =>

                        <div className="ingrediente">
                            <div style={{
                                backgroundImage: `url(${imageIngredient})`,
                                height: '150px',
                                backgroundSize: 'cover',
                                borderRadius: "50%",
                                margin: "25px 10px",
                                border: "1px solid black"
                            }} >
                            </div>
                            <p className="nombre-receta">{ingrediente}</p>

                        </div>

                    )}

                </div>

                <div class="titulo-seccion"><h1>Preparación</h1></div>

                <section class="prep-container">
                    <div class="prep-right">
                        <ol>

                            {pasos.map((paso, key) => <li className="texto-preparacion" >

                                {

                                    (pasos.length / 2) > key ? paso : ""}

                            </li>)}
                        </ol>
                    </div>
                    <div class="prep-image">
                        <img src={imagenPreparacion} alt="" />
                    </div>
                    <div class="prep-left">
                        <ol>
                            {pasos.map((paso, key) => <li className="texto-preparacion" >

                                {(pasos.length / 2) < key ? paso : ""}</li>)}
                        </ol>
                    </div>
                </section>
                <section className="seccion-boton">
                    <div class="boton-receta">
                        <button className="boton-receta" onClick={() => this.props.guardarRecetas(llave)}>Agregar receta</button>
                        <p href="#" class="boton">Recibe los ingredientes en tu casa</p>
                        <hr></hr>
                    </div>
                </section>
            </div>
        )
    };

    ponerPreparacionIngredientes = () => {


        if (!this.props.recetasReducer.recetas) {
            return <h1>recetas</h1>
        }

        if (this.props.recetasReducer.error) {
            return <h1>error</h1>

        }

        if (this.props.preparacionReducer.cargando) {
            return <Spinner />
        }

        if (this.props.preparacionReducer.error) {
            return <Fatal mensaje={this.props.preparacionReducer.error} />
        }

        if (!this.props.preparacionReducer.length) {
            return <h1>no hay nada</h1>
        }

        if (!('preparacion_key' in this.props.recetasReducer.recetas[this.props.match.params.key])) {
            return <h1>no esta preparacion key</h1>
        }



    }


    render() {

        console.log(this.props)

        return (

            <div>

                {this.ponerPreparacion()}
                {/* {this.ponerPreparacionIngredientes()} */}
            </div>

        )
    }
}
const mapStateToProps = ({ recetasReducer, preparacionReducer }) => {
    return {
        recetasReducer,
        usuariosCarritoReducer
    }

}

const mapDispatchToProps = {
    ...recetasActions,
    datosParaReceta,
    ...carritoActions
}
export default connect(mapStateToProps, mapDispatchToProps)(Preparacion)