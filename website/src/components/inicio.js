import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { connect } from 'react-redux'
import * as recetasActions from './actions/recetasActions'

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
      this.props.traerTodasRecetas()
    }

    ponerRecetas = () => (

      
        this.props.recetas.map((receta) => (

          <tbody key = {receta.id}>
               <tr >
            <td>
            {receta.name}
            </td>
            <td>
              {receta.username}
            </td>
            </tr>
          </tbody>           
          
          
        )         
      )
      
    )
    render() {
      console.log(this.props)
        return (
            <div>  

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

            {this.ponerRecetas()}
            
          </div>
        )
    }
}

const mapStateToProps = (reducer) => {
  return reducer.recetasReducer
}



export default  connect(mapStateToProps, recetasActions )(Inicio)