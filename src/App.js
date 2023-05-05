import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories/Categories';
import AddCategory from './pages/AddCategory/AddCategory';
import SubCategory from './pages/SubCategory/SubCategory';
import AddSubCategory from './pages/AddSubCategory/AddSubCategory';
import AddProduct from './pages/AddPoduct/addproduct';
import Products1 from './pages/Products/product';
import OrdersList from './pages/OrdersList/OrdersList';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import CustomerList from './pages/CustomerList/CustomerList'
import Customer from './pages/Customer/Customer'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AddOrder from './pages/AddOrder/AddOrder';



function App() {
  return (
    <section>

      <Routes>
        <Route path='/' element={<Categories/>} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path='/addcategory/:id' element={<AddCategory />} />
        <Route path='/Subcategory' element={<SubCategory />} />
        <Route path='/addSubCategory' element={<AddSubCategory />} />
        <Route path='/addSubCategory/:id' element={<AddSubCategory />} />
        <Route path='/products' element={<Products1/>}/>    
        <Route path='/addproduct/:id' element={<AddProduct/>}/>  
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/ordersList' element={<OrdersList />} />
        <Route path='/AddOrder' element={<AddOrder/>}/>
        <Route path='/Orders/:id' element={<OrderDetails />} />  
        <Route path='/customers' element={<CustomerList />} />  
        <Route path='/customer/:id' element={<Customer />} />  
        <Route path='*' element={<NotFound />} />  

      </Routes> 


    </section>
  );
}

export default App;