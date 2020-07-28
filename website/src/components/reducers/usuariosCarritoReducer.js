const INITIAL_STATE = {
       // Aca voy a guardar en principio las recetas que el usuario guarda en el carrito del mercado
    carrito: [],
    modalAbierto:true,
    user: {
        name:"juan", 
        email: "email@email"
    }, 
    cargando: false,
    enviado: null
}
 

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'agregar_receta':
            return {...state, carrito: action.payload}

        case 'borrar_receta':
            return {...state, carrito: action.payload}


        case 'abrir-cerrar-modal':
            return {...state, modalAbierto: action.payload}


        case 'usuario-registrado':
            return{...state, user: action.payload}

        case 'error':
            return{...state, error:action.payload}

        case 'cargando':
            return{...state, cargando: action.payload}

        case 'enviar-compra':
            return{...state, enviado: action.payload}

        default:
            return state
    }

}