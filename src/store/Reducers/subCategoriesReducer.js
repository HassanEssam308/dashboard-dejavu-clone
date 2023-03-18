
const InitialState = {

    subCategories:[]
}



export default function subCategoriesReducer(state = InitialState, action) {

    switch (action.type){

        case 'SET_SubCategories':
            return { ...state, subCategories: action.payload}
            default:
                return state
    }

}