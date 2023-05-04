import { Link , useNavigate } from "react-router-dom"
import { db } from '../../config/firestore_config';
import { collection,addDoc } from "firebase/firestore";
import React, { useState } from 'react';

export default function AddUser()
{
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
     
    });

    const navigate = useNavigate();

    let datetimeNow = new Date();
    const addUser = async () => {
        const docRef = await addDoc(collection(db, "users"), {
            firstname: user.firstname,
            lastname:user.lastname,
            email : user.email, 
            password : user.password,
            date : datetimeNow.toUTCString(),
});
console.log("Document written with ID: ", docRef.id);
alert('added')
navigate("/users")
}

const handleform = async (e) => {
    switch (e.target.name) {
        case 'firstname':
            setUser({ ...user, firstname: e.target.value });
            break;
        case 'lastname':
            setUser({ ...user, lastname: e.target.value });
            break;
        case 'email':
            setUser({ ...user, email: e.target.value });
            break; 
            case 'password':
                setUser({ ...user, password: e.target.value });
                break; 
        default : 
            return '';
    }
}

return (
    <>
        <div className='container-fluid mt-5'>
            <span className="productnav m-md-4">
                <Link to='/' className="nav-link text-primary-emphasis d-inline"> Dashoard </Link>
                <Link to='/ordersList' className="nav-link text-primary-emphasis d-inline"> / Users</Link>
                <span className="nav-link text-primary-emphasis d-inline">  / Add User</span>
            </span>
            <div className="row m-sm-4">
                <h3 className="col-md-9 ">  Add User</h3>
                <div className='col-md-3'>
                    <Link to='/users' >
                        <button type="button" className="btn btn-warning rounded-0 px-5"> Back </button></Link>
                </div>
            </div>
            <form>
                <div className="container-fluid" style={{ width: '70%' }}>
                    <div className="form-group coulmn mb-3">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">Firstname :</label>
                        <div className="col-sm-10">
                            <input name='firstname' type="text" className="form-control" id="customer" placeholder="Enter Your Firstname"
                                onChange={(e) => handleform(e)} value={user.firstname} />
                        </div>
                    </div>
                    <div className="form-group coulmn mb-3">
                        <label  className="col-sm-2 col-form-label">Lastname :</label>
                        <div className="col-sm-10">
                            <input name='lastname' type="text" className="form-control" id="prdName" placeholder="Enter Product Name"
                                onChange={(e) => handleform(e)} value={user.lastname} />
                        </div>
                    </div>
                    <div className="form-group coulmn mb-3">
                        <label htmlFor="email"  className="col-sm-2 col-form-label">Email :</label>
                        <div className="col-sm-10">
                            <input name='email' type="email" className="form-control" id="img" placeholder="Enter Your Email"
                                onChange={(e) => handleform(e)} value={user.email} required />
                        </div>
                    </div>
                    <div className="form-group coulmn mb-3">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password :</label>
                        <div className="col-sm-10">
                            <input name='password' type="password" className="form-control" id="count" placeholder="Enter Password"
                                onChange={(e) => handleform(e)} value={user.password} />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <button type="button" className="btn btn-dark px-5 py-2" onClick={()=>addUser()}>Add User</button>
                </div>
            </form>
        </div>

    </>
)

}