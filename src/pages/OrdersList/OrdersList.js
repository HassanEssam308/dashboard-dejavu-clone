import './OrdersList.css'
import { Link } from "react-router-dom"
import { db } from '../../config/firestore_config';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';

export default function OrdersList() {
    
    const [orders, setOrders] = useState([]);

    const fetchOrder = () => {

        onSnapshot(collection(db, 'Orders'), (snapshot) => {
            const newData = [];
            snapshot.forEach((doc) => {
                newData.push({ ...doc.data(), id: doc.id });
            })
            console.log(newData)
            setOrders(newData)
        })
    }

    useEffect(() => {
        console.log("orders");
        fetchOrder();

    }, []);

    const deleteOrder = async (OrderID) => {
        try {
            await deleteDoc(doc(db, "Orders", OrderID))
            console.log("delete Order");
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
                            <span className='text ms-2'>Orders</span>
                        </div>
                        <div>
                            <h3>Orders</h3>
                        </div>
                    </div>
                   {/*  <div className='col mt-5'>
                        <Link to={'/AddOrder'}>
                            <button type="button" className="btn btn-warning rounded-0 px-4">New Orders</button>
                        </Link>
                    </div> */}
                </section>
                <div>
                    <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><input className='checkbox' type='checkbox'></input></th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Paid</th>
                                    <th scope="col">Count</th>
                                    <th scope="col">Price</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (orders.length > 0) ? orders?.map((order, index) => {
                                        return <tr key={index}>
                                            <td><input className='checkbox' type='checkbox'></input></td>
                                            <td><Link to={`/orders/${order.id}`} className='record'>#{order.id}</Link></td>
                                            <td>{order.date}</td>
                                            <td><a href='/customer' className='record'>{order.customer}</a></td>
                                            <td><p className='record-bg1'>{order.paid}</p></td>
                                            <td>{order.count} items</td>
                                            <td>LE {order.price}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteOrder(order.id)}><i role="button" className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    }) : (<h1 className='m-4'>No Orders Yet.</h1>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className='ms-5 mb-4'>
                        <span>Dejavau — ECommerce Dashboard © 2023</span>
                    </div>
                </div>
            </div>
        </>
    )
}