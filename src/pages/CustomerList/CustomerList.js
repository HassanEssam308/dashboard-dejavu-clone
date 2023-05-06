import { Link } from 'react-router-dom'
import './CustomerList.css'
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firestore_config';



export default function CustomerList()
{

    const [users, setUsers] = useState([]);

    const fetchUsers = () => {

        onSnapshot(collection(db, 'users'), (snapshot) => {
            const newData = [];
            snapshot.forEach((doc) => {
                newData.push({ ...doc.data(), id: doc.id });
            })
            console.log(newData)
            setUsers(newData)
        })
    }

    useEffect(() => {
        console.log("Users");
        fetchUsers();

    }, []);

    const deleteUser = async (userID) => {
        try {
            await deleteDoc(doc(db, "users", userID))
            console.log("delete users");
        }
        catch (error) {
            console.log(error);
        }
    }
    
    // const customer = [
    
    //     {number:3451,name:'loniel mark',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-2-40x40.jpg",registered:'July 20, 2021',country:'USA',group:'Wholesale',spent:34.324},
       
    //     {number:3451,name:'Brian Wood',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-7-40x40.jpg",registered:'Dec 18, 2020',country:'USA',group:'Wholesale',spent:22.984},
      
    //     {number:3451,name:'Kevin Smith',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-6-40x40.jpg",registered:'Apr 6, 2021',country:'Germany',group:'Wholesale',spent:30.489},
        

    // ] 

    return (
        <>
        <div className='container-fluid bg-light'>
            <section className='row'>
                <div className='col m-4'>
                    <div>
                        <a href='/' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text ms-2'>Customer List</span>
                    </div>
                    <div>
                        <h3>Customer List</h3>    
                    </div>   
                </div>
                {/* <div className='col-2 mt-5'>
                 <button type="button" className="button">New customer</button> 
                </div> */}
            </section>
            <div>
            <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><input className='checkbox' type='checkbox'></input></th>
                         <th scope="col">Name</th>
                        <th scope="col">E_mail</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>

                        {/* <th scope="col">Spent</th>  */}


                       {/*   <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th> */}
                      
                       
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((record1,index)=>{
                    return <tr key={index}>
                    <td><input className='checkbox' type='checkbox'></input></td>
                    <td>
                        <div>
                        <img src={record1.img}/>  
                      
                             <Link  to={`/customer/${record1.id}`}className='record'>{'  '}{record1.firstname} </Link><br/>  
                
                        </div>
                       
                    </td>
                    <td>{record1. email}</td>
                    <td><p  className='record'>{record1.city}</p></td>
                    <td><p className='record'>{record1.address}</p></td>
                    {/* <td><p className='record'>${record1.spent}</p></td> */}
                 
                 
                    </tr>
                    })
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