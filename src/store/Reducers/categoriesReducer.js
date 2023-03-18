
const InitialState = {

    categories:[]
}



export default function categoriesReducer(state = InitialState, action) {

    switch (action.type){

        case 'SET_Categories':
            return { ...state, categories: action.payload}
            default:
                return state
    }

}