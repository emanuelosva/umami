import axios from 'axios';


export const traerTodasRecetas = () => async (dispatch) => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: 'traer_recetas',
        payload: respuesta.data
    })
}