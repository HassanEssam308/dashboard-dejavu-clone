
const Init={
    products:[]
}
export default function ProductReducer(state=Init,action){
    switch(action.type){
        case "Set_Products":
            return{...state,products:action.payload};
            default:
                return state;
    }
}