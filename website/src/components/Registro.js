import React, { useState } from 'react'
import './css/ingreso.css'
import { connect } from 'react-redux'
import axios from 'axios'


import * as preparacionActions from './actions/preparacionActions'
import * as carritoActions from './actions/carrtioActions'

const Registro = (props) => {

	const [form, useform] = useState({ email: "", pasword: "" })

	const inputValor = (ev) => {
		useform({
			...form,
			[ev.target.name]: ev.target.value
		})
	}


	const loginUsuario = async (ev) => {
		ev.preventDefault()

		try {
			const { status, data } = await axios({
				url: "https://umami-service.vercel.app/api/user/login",
				method: "post",
				data: { ...form }
			})
			const token = data.body
			sessionStorage.setItem('token', token)
			window.location.href = "/"
		} catch (error) {
		}
	}

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
				<form onSubmit={loginUsuario}>
					<input type="text" placeholder="Tu email" onChange={inputValor} name="email" />
					<input type="password" placeholder="Tu contraseña" onChange={inputValor} name="password" />
					<button className="login" onClic={props.ingreso()}>Entra</button>
					<a href="#"><p className="conditions">¿Olvidaste tu contraseña?</p></a>
				</form>
			</div>
		</div>

	)
}



const mapStateToProps = (reducers) => {
	return (reducers.clienteCarrito)
}

const mapDispatchToProps = {

	...carritoActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Registro)

