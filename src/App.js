import { Route, Routes } from 'react-router-dom';
import './App.css';
import OrderDetails from './pages/Orders/OrderDetails/OrderDetails';
import OrdersList from './pages/Orders/OrdersList/OrdersList';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<OrdersList/>}/>
      <Route path='/OrderDetails' element={<OrderDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
