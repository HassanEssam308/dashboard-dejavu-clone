import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store} >
      
          <main className='d-flex ' >
            <aside className='col-4  col-md-3   col-lg-2   ' >
            <Sidebar />
            </aside>

            <aside  className='col  mx-auto   ' >
                 <App />
            </aside>
         
         
          </main>


      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
