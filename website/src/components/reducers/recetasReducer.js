const INITIAL_STATE = {
    recetas: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'traer_recetas':
            return { ...state, recetas:action.payload}

        default:  return state
    }
}