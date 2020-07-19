
import { TRAER_POR_RECETA, CARGANDO, ERROR } from '../../types/preparacionTypes' 
const INITIAL_STATE = {
    preparacion: [],
    cargando:false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_POR_RECETA:
            return {
                ...state,
                preparacion: action.payload,
                cargando:false,
                error: ''
            }

            case CARGANDO:
                return{...state, cargando:true}
    
            case ERROR: 
                return {...state, error:action.payload, cargando:false}        

        default:  return state
    }
}