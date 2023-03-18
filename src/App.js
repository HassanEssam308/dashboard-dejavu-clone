import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories/Categories';
import AddCategory from './pages/AddCategory/AddCategory';
import SubCategory from './pages/SubCategory/SubCategory';
import AddSubCategory from './pages/AddSubCategory/AddSubCategory';


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



      </Routes>


    </>
  );
}

export default App;
