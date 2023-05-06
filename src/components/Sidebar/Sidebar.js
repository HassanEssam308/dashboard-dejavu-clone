import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (




    <div style={{ backgroundColor: "rgb(61, 70, 77)","fontSize":'1rem' }} className=" h-100  min-vh-100  pt-5 
      d-flex flex-column   align-items-sm-start px-3 pt-2 ps-md-4   text-white  w-100">

      <span className="fs-5 my-md-3">Dejavu</span>


      {/* <div className="dropdown  my-3">
        <Link className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
          <span className="d-none d-sm-inline mx-1">Winner</span>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><Link className="dropdown-item text-decoration-none" >Settings</Link></li>
          <li><Link className="dropdown-item text-decoration-none" >Profile</Link></li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li><Link className="dropdown-item text-decoration-none" >Sign out</Link></li>
        </ul>
      </div> */}

      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        {/* <li className="nav-item my-2">
          <NavLink className=' text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
            to="/"  >
            <i className="bi bi-house-door"></i>
            <span className="ms-1 d-none d-sm-inline">Home</span> </NavLink>


        </li> */}

        <li>

          <li role="button" href="#submenu1" data-bs-toggle="collapse" className="  my-2 text-decoration-none text-white px-0 align-middle">
            <i className="bi bi-list"></i>
            <span className="ms-1 d-none d-sm-inline">Categories</span> </li>

          <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
            <li className="w-100">
              <NavLink className=' ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/categories"  > Categories</NavLink>
            </li>
            <li>

              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/addcategory"  > Add Category  </NavLink>
            </li>
            <li>
              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/Subcategory"  > Sub Category  </NavLink>
            </li>
            <li>
              {/*<Link  className=" px-0"> <span className="d-none d-sm-inline">Item</span> 2 </Link> */}
              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/addSubCategory"  >Add Sub Category  </NavLink>
            </li>
          </ul>
        </li>


        <li className=" my-sm-2">
          <span role="button" href="#submenu3" data-bs-toggle="collapse" className=" my-sm-3 px-0 align-middle">
            <i className="bi bi-grid-1x2-fill"></i>
            <span className="ms-1 d-none d-sm-inline">Products</span> </span>

          <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">

            <li>

              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/products"  > Products</NavLink>
            </li>
            <li>
              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/addproduct"  > Add Product</NavLink>
            </li>
          </ul>
        </li>
        
        <li className=" my-sm-2">
          <span role="button" href="#submenu4" data-bs-toggle="collapse" className=" my-sm-3 px-0 align-middle">
          <i className="bi bi-table me-sm-1"></i>
            <span className="ms-1 d-none d-sm-inline">Orders</span> </span>

          <ul className="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">

            <li>

              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/ordersList"> Order List</NavLink>
            </li>
           {/*  <li>
              <NavLink className='ms-sm-2 text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
                to="/AddOrder"  > Add Order</NavLink>
            </li> */}
          </ul>
        </li>

        <li>
          <Link className="  text-decoration-none text-white px-0 align-middle my-3">
            <NavLink className=' text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
              to="/customers"  > <i className="bi bi-people-fill me-sm-2">
              </i>Customers List </NavLink>
          </Link>

        </li>

        <li>
          {/* <Link className="  text-decoration-none text-white px-0 align-middle my-3">
            <NavLink className=' text-decoration-none' style={({ isActive }) => (isActive) ? { color: 'orange' } : { color: "white" }}
              to="/customer"  > <i className="bi bi-people-fill me-sm-2">
              </i>Customers </NavLink>
          </Link> */}

        </li>
      </ul>
      <hr />
     
    </div>







  );
}

export default Sidebar;
