import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Inicio extends React.Component {
    render() {
        return (
            <div>  

            <Carousel>
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
      </Carousel>
            
          </div>
        )
    }
}

export default Inicio