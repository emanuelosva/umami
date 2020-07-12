import axios from 'axios';

import { TRAER_TODOS, CARGANDO, ERROR } from '../../types/recetasTypes' 


export const traerTodasRecetas = () => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })
    try {
        const respuesta = await axios.get('https://umami-service.vercel.app/api/recipe');
    dispatch({
        type: TRAER_TODOS,
        payload: respuesta.data.body
        
    })
    }
    catch (error) {
        console.log(`se jodió esta carajada, porque la url me dice: ${error}`)
        dispatch({
            type: ERROR,
            payload:error.message
            
        })
    
    }
    
}



// https://jsonplaceholder.typicode.com/users



// https://umami-api.emanuelosva.vercel.app/api/recipe

// https://umami-service.vercel.app/api/recipe