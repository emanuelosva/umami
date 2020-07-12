import axios from 'axios'
import { TRAER_POR_RECETA, CARGANDO, ERROR } from '../../types/preparacionTypes' 
import * as recetasTypes from '../../types/recetasTypes'

const { TRAER_TODOS: RECETAS_TRAER_TODOS } = recetasTypes

export const traerPorReceta = (key) => async (dispatch, getState) => { 
    const { recetas } = getState().recetasReducer;
    const { preparacion } = getState().preparacionReducer;
    const receta_id = recetas[key].id

    const respuesta = await axios.get(`https://umami-service.vercel.app/api/recipe`);

    const preparacion_actualizado =[
        ...preparacion,
        respuesta.data.body[receta_id]
    ]

    const preparaciones_key = preparacion_actualizado.length - 1;
    const recetas_actualizadas = [...recetas]
    recetas_actualizadas[key] = {
        ...recetas[key],
        preparaciones_key
    }

        dispatch({
            type: RECETAS_TRAER_TODOS,
            payload: recetas_actualizadas
        })

      
        dispatch({
            type: TRAER_POR_RECETA,
            payload: preparacion_actualizado
        })  

  
  
}