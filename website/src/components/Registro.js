import React from 'react' 
import './css/ingreso.css'
import { connect } from 'react-redux'

import * as preparacionActions from './actions/preparacionActions'
import * as carritoActions from './actions/carrtioActions'

const Registro = (props) => {
    return (
        <div className="container-login">
            <div className="enter">
                <p>ENTRAR</p>
                
            </div>
            
            <div className="redes-cred">
                <a href="#"><button className="redes-cred">Entra con facebook</button></a>
            </div>
            <div className="data-record">
                <p>o entra con tu email</p>
                <input type="text" placeholder="Tu email"/>
                <input type="password" placeholder="Tu contraseña"/>
                <a href="#"><button className="login" onClic = {props.ingreso()}>Entra</button></a>
                <a href="#"><p className="conditions">¿Olvidaste tu contraseña?</p></a>
            </div>

        
            {console.log(props)}
        </div>  
    
     )
}



const mapStateToProps = (reducers) => {
    return (reducers.clienteCarrito)
}

const mapDispatchToProps = {
    
    ...carritoActions
}

export default connect(mapStateToProps, mapDispatchToProps) (Registro)

