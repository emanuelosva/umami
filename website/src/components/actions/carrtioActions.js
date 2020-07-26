import axios from 'axios'

export const guardarRecetas = (key) => (dispatch, getState) => {

    const  {carrito}  = getState().clienteCarrito;
    
    const count = carrito.push(key)
   
    
    const receta_agregada = [
        ...carrito
    ]
    

    dispatch({
        type: 'agregar_receta',
        payload: receta_agregada
    })

   
}

export const borrarRecetas = (key) => (dispatch, getState) => {

    const  {carrito}  = getState().clienteCarrito;
    
    let pos = carrito.indexOf(key)
    let elementoEliminado = carrito.splice(pos, 1)

    const receta_eliminada = [
        ...carrito
    ]
    

    dispatch ({ type: 'borrar_receta', 
                payload: receta_eliminada })
  }

//   this function dont work

  export const abrirCerrarModal = () => (dispatch, getState) => {

    let  {modalAbierto}  = getState().clienteCarrito;
    
    modalAbierto = !modalAbierto

    const abrirCerrarModal = [
        modalAbierto
    ]
    

    dispatch ({ type: 'abrir-cerrar-modal', 
      
    payload: modalAbierto })
  }




  export const ingreso = () => async (dispatch, getState) => {
        
        const {data, status} = await axios({
            url: 'https://umami-service.vercel.app/api/user/login',
            method: 'POST',
            data: { email: "el email", pasword: "el password"}
        });
        const token = data.body.token;        
        
        dispatch ({ type: 'usuario-registrado', 
      
                    payload: token })

  }

  export const recetaEnviada = () => async (dispatch, getState) => {
      
    const {data, status} = await axios({
        url: 'https://umami-service.vercel.app/api/shop',
        method: 'POST',
        headers: {Authorization: 'Bearer aqui-pone-el-token'},
        data:  {
        username: 'el email del usuario',
        recipe: 'el _id de la receta',
        cost: 0,
        }
    });
    
    
    if (status === 200 || status ===201) {
        // ...alguna lógica para avisar al usuario de que todo fue bien
    }

    dispatch ({ type: 'enviar-compra', 
      
                    payload: true })
  }

 


  