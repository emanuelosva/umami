import React from 'react'

class CarruselInicial extends React.Component {
    render() {
        return(

            <div className= "contenedor-item-carrusel">
                <div>
                      <h1>Título de la receta</h1>
                        <h3>Descripción de la receta</h3>

                        <a><p>Como prepararlo </p> <hr/></a>
                </div>

                <div style = {{
                    padding: '25px'
                }}>
                    <div style={{ backgroundImage: `url(  'https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563801848_984792_1563804092_noticia_normal.jpg')`,
                              height: '400px',
                              width:'550px',
                              backgroundSize: 'cover',
                                
                            }} >
                </div>  
                </div>
                
                

            </div>

           
        )
    }
}


export default CarruselInicial