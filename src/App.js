import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories/Categories';
import AddCategory from './pages/AddCategory/AddCategory';
import SubCategory from './pages/SubCategory/SubCategory';
import AddSubCategory from './pages/AddSubCategory/AddSubCategory';
import AddProduct from './pages/AddPoduct/addproduct';
import Products1 from './pages/Products/product';


function App() {
  return (
    < >

       <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/categories' element={<Categories />} />
  
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path='/addcategory/:id' element={<AddCategory />} />
        <Route path='/Subcategory' element={<SubCategory />} />
        <Route path='/addSubCategory' element={<AddSubCategory />} />
        <Route path='/addSubCategory/:id' element={<AddSubCategory />} />
        <Route path='/products' element={<Products1/>}></Route>      
        <Route path='/addproduct/:id' element={<AddProduct/>}></Route>    
        <Route path='/addproduct' element={<AddProduct/>}></Route>   
      </Routes> 


    </>
  );
}

export default App;
