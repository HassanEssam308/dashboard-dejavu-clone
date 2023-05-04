
import './CustomerList.css'
import { Link } from "react-router-dom"
import { db } from '../../config/firestore_config';
import { collection, getDocs , deleteDoc,doc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';


export default function CustomerList()
{
    const [Users , setUsers] = useState([]);

    const fetchUser = async () => {
        
        await getDocs(collection(db, "users"))
            .then((querySnapshot)=>{ 
                const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setUsers(newData);
                console.log(newData) 
            })
        }
    
    useEffect(() => 
    {
        fetchUser();
        if(Users.length > 0)
        {
            deleteUser();
        }
    } , [Users] );

    const deleteUser = async (userID) => 
    {
        try {
            await deleteDoc(doc(db,"users",userID))
            console.log("delete User");
        } 
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className='container-fluid bg-light'>
            <section className='row'>
                <div className='col-10 m-4'>
                    <div>
                        <a href='/' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text ms-2'>Users</span>
                    </div>
                    <div>
                        <h3>Authenticated Users</h3>    
                    </div>   
                </div>
                <div className='col mt-5'>
                <Link to={'/adduser'}>
                <button type="button" className="btn btn-warning rounded-0 px-4">New User</button>
                </Link>
                </div>
            </section>
            <div>
            <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><input className='checkbox' type='checkbox'></input></th>
                        <th scope="col">Number</th>
                       
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                    (Users.length>0) ? Users?.map((user,index)=>{
                        return <tr key={index}>
                        <td><input className='checkbox' type='checkbox'></input></td>
                        <td><Link to={`/orders/${user.id}`} className='record'>#{user.id}</Link></td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td><a href='/customer' className='record'>{user.customer}</a></td>
                       
                        <td><button type="button" className="btn btn-danger" onClick={()=>deleteUser(user.id)}><i role="button" className="bi bi-trash3"></i></button></td>
                        </tr>
                        }):(<h1 className='m-4'>No Users</h1>)
                    }
                </tbody>
                </table>
            </div>
            <hr/>
            <div className='ms-5 mb-4'>
                <span>Dejavau — ECommerce Dashboard © 2023</span>
            </div>
            </div>
        </div>
        </>
    )
}