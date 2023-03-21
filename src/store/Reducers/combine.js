import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import ProductReducer from './ProductListReducer'


export default combineReducers({
    
    categories: categoriesReducer,
    subCategories:subCategoriesReducer,
    products:ProductReducer,
})