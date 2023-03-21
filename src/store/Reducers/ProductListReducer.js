
const Inite={
    products:[]
}
export default function ProductReducer(state=Inite,action){
    switch(action.type){
        case "Set_Products":
            return{...state,products:action.payload};
            default:
                return state;
    }
}