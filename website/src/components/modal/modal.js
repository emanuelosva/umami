import React, { useState } from 'react';
import logoUmami from '../../assets/logo-umami.png'
import ReactDOM from 'react-dom'
import '../css/modal.css'
import { connect } from 'react-redux'
import axios from 'axios'

import * as recetasActions from '../actions/recetasActions'
import * as preparacionActions from '../actions/preparacionActions'
import * as carritoActions from '../actions/carrtioActions'


const { traerPorReceta: datosParaReceta } = preparacionActions


const Ingreso = (props) => {

    const [form, useform] = useState({ email: "", name: "", pasword: "" })
    const [error, useError] = useState(false);
    sessionStorage.setItem('errorRegister', '');
    function getError() { return sessionStorage.getItem('errorRegister') };

    const inputValor = (ev) => {
        useform({
            ...form,
            [ev.target.name]: ev.target.value
        })
    }

    const crearUsuario = async (ev) => {
        ev.preventDefault()
        try {
            const { data, status } = await axios({
                url: "https://umami-service.vercel.app/api/user",
                method: "post",
                data: { ...form }
            })

            sessionStorage.setItem('errorRegister', '');
            window.location.href = '/registro'
        } catch (error) {
            sessionStorage.setItem('errorRegister', true);
        }
    }

    if (!props.isOpen) {
        return ""
    }

    return (

        ReactDOM.createPortal(
            <div className="fondo-oscuro">


                <div className="container-register">



                    <button className="cerrar" onClick={props.onClose}> <h4>X</h4></button>
                    <div className="logo">
                        <img src={logoUmami} alt="" />
                        <p>Obtenga las mejores recetas en la puerta de su casa cuando las necesite</p>

                    </div>
                    <div>
                        <div className="redes-cred">
                            <a href="#"><button className="redes-cred">Registrarse con facebook</button></a>
                        </div>

                        <div className="data-record">
                            <form onSubmit={crearUsuario}>
                                {getError() ?
                                    <p className="alert alert-danger"> introduce los datos correctos </p> :
                                    null
                                }
                                <p>o regístrate con tu email</p>
                                <input type="text" name="name" placeholder="Ingresa tu nombre" onChange={inputValor} />
                                <input type="email" name="email" placeholder="Correo electrónico" onChange={inputValor} />
                                <input type="password" name="password" placeholder="Tu contraseña" onChange={inputValor} />
                                <button className="login" type="submit">Registrarme</button>
                            </form>
                            <p className="conditions">Al hacer clic en "Crear cuenta" certifico que tengo 18 años o mas y acepto las condiciones de uso, la politica de privacidad, la Politica de cookies y recibir novedades y promociones.</p>
                            <p className="footer">Ya tienes cuenta?<a href="/registro"> Entrar</a></p><br />

                        </div>
                    </div>
                </div>

            </div >, document.getElementById('modal')
        )
    )
}

const mapStateToProps = (reducers) => {
    return (reducers.clienteCarrito)
}

const mapDispatchToProps = {
    ...carritoActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingreso)
