import { combineReducers } from 'redux'
import recetasReducer from './recetasReducer'
import preparacionReducer from './PreparacionReducer'
import clienteCarrito from './usuariosCarritoReducer'

export default combineReducers({
    recetasReducer,
    preparacionReducer,
    clienteCarrito

})