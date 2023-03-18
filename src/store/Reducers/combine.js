import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";


export default combineReducers({
    // moviesFav: moviesFavReducer,
    categories: categoriesReducer,
    subCategories:subCategoriesReducer
})