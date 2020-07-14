import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { connect } from 'react-redux'
import * as recetasActions from './actions/recetasActions'
import Spinner from './Spinner'
import Fatal from './fatal'
import Receta from './receta'

class Inicio extends React.Component {

    state = {
       recetas: []
    };

    componentDidMount() {
      // const resultados = await axios.get('https://jsonplaceholder.typicode.com/users')
      // console.log(`resultados: ${resultados.data}`)

      // this.setState({
      //   recetas: resultados.data
      // })
      if(!this.props.recetas.length) {
        this.props.traerTodasRecetas()
      }
          
    
    }  


    render() {

      if(this.props.cargando){
        return(<Spinner/>)
      }

      if(this.props.error) {
        return(<Fatal mensaje = {this.props.error}/>)
      }
      
        return (
            <Receta />
        )
    }
}

const mapStateToProps = (reducer) => {
  return reducer.recetasReducer
}



export default  connect(mapStateToProps, recetasActions )(Inicio)