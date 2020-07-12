import { combineReducers } from 'redux'
import recetasReducer from './recetasReducer'
import preparacionReducer from './PreparacionReducer'

export default combineReducers({
    recetasReducer,
    preparacionReducer

})