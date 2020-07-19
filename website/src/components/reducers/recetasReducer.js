
import { TRAER_TODOS, CARGANDO, ERROR } from '../../types/recetasTypes' 
const INITIAL_STATE = {
    recetas: [],
    cargando:false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_TODOS:
            return { ...state, 
                recetas:action.payload,
                cargando:false,
                error:''  
            }
        case CARGANDO:
            return{...state, cargando:true}

        case ERROR: 
            return {...state, error:action.payload, cargando:false}

        default:  return state
    }
}