import React from 'react'
import logoUmami from '../../assets/logo-umami.png'
import ReactDOM from 'react-dom'
import '../css/modal.css'


const Ingreso = (props) => {

    if(!props.isOpen) {
        return ""
    }
    

        return (

        ReactDOM.createPortal(
            <div className="fondo-oscuro">

    
            <div className="container-register">
            

            
                <button className= "cerrar" onClick={props.onClose}> <h4>X</h4></button>
                <div className="logo">
                    <img src={logoUmami} alt=""/>
                    <p>Obtenga las mejores recetas en la puerta de su casa cuando las necesite</p>
                     
                </div>  
                <div>
             <div className="redes-cred">
                <a href="#"><button className="redes-cred">Registrarse con facebook</button></a>
            </div>

            <div className="data-record">
                <form method="POST" action="https://umami-service.vercel.app/api/user">
                    <p>o regístrate con tu email</p>
                    <input type="text" name="name" placeholder="Ingresa tu nombre"/>
                    <input type="text" name="email" placeholder="Correo electrónico"/>
                    <input type="password" name="password" placeholder="Tu contraseña"/>  
                    <button className="login" type="submit">Crear Cuenta</button>                                                       
                </form>
                 
                 {/* para el formulario de login la direccion es https://umami-service.vercel.app/api/user/login  solo correo y pasword*/}
                
                    <p className="conditions">Al hacer clic en "Crear cuenta" certifico que tengo 18 años o mas y acepto las condiciones de uso, la politica de privacidad, la Politica de cookies y recibir novedades y promociones.</p>
                    <hr></hr>
                    <p className="footer">Ya tienes cuenta?<a href="#"> Entrar</a></p><br/>
               
            </div>
        </div> 
            </div> 
          
    
        </div>    , document.getElementById('modal')
        )
       

    )
     
    
    
}

export default Ingreso