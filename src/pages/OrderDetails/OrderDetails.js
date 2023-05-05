import './OrderDetails.css'
import { Link } from "react-router-dom"
import { db } from '../../config/firestore_config';
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
    let OrderID = useParams();
    const [orderDetails, setorderDetails] = useState({});

    const fetchSingleOrder = async () => {
        const singleData = await getDoc(doc(db, "Orders", OrderID.id))
        if (singleData.exists()) {
            setorderDetails(singleData.data());
        }
        else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        console.log('OrderDetails');
        fetchSingleOrder();
    }, []);

    return (<>
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-10 p-4'>
                    <div>
                        <a href='/' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text mx-2'>Orders</span>
                        <span className='text'>/</span>
                        <span className='text mx-2'>Order #{OrderID.id}</span>
                    </div>
                    <div className=''>
                        <h3 className='d-inline me-2'>Orders</h3>
                        <h3 className='d-inline'>#{OrderID.id}</h3>
                    </div>
                </div>
                <div className='col pt-5'>
                    <Link to='/ordersList' >
                        <button type="button" className="btn btn-warning rounded-0 px-5"> Back </button></Link>
                </div>
            </div>
            <hr className='mx-4 me-5' />
            <div>
                <span className='mx-3 ms-5 text1'>{orderDetails.date}</span>
                <span className='text-secondary'>|</span>
                <span className='mx-3 text1'>{orderDetails.count} items</span>
                <span className='text-secondary'>|</span>
                <span className='mx-3 text1'>Total LE {Number(orderDetails.count) * Number(orderDetails.price)}.00</span>
                <span className='text-secondary'>|</span>
                <span className='mx-3 text1 bg1'>{orderDetails.paid}</span>
            </div>
            <hr className='mx-4 me-5' />
            <section>
                <div>
                    <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><h2>Product</h2></th>
                                    <th scope="col"></th>
                                    <th scope='col'></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={orderDetails.img} alt='' width={70} />
                                        <span className='ms-2'>{orderDetails.productName}</span>
                                    </td>
                                    <td> <p>LE {orderDetails.price}.00</p> </td>
                                    <td> <p>{orderDetails.count}</p> </td>
                                    <td> <p>LE {Number(orderDetails.count) * Number(orderDetails.price)}.00</p> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Subtotal</p>
                                        <p>Store Credit</p>
                                        <p className='mb-1'>Shipping</p>
                                        <p className='text-secondary'>via FedEx International</p>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <p>LE {Number(orderDetails.count) * Number(orderDetails.price)}.00</p>
                                        <p>LE -20.00</p>
                                        <p>LE 25.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Total</p>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <p>LE {orderDetails.balanceOrder}.00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><h2>Balance</h2></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Order Total</p>
                                        <p>Return Total</p>
                                    </td>
                                    <td>
                                        <p>LE {orderDetails.balanceOrder}.00</p>
                                        <p>LE 0.00</p>
                                    </td>
                                </tr>
                                <tr> <td>
                                    <p>Paid by customer</p>
                                    <p>Refunded</p>
                                </td>
                                    <td>
                                        <p>LE -80.00</p>
                                        <p>LE 0.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Balance <span>(customer owes you)</span></p>
                                    </td>
                                    <td>
                                        <p>LE {Number(orderDetails.balanceOrder) - 80}.00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <hr />
            <div className='ms-5 mb-4'>
                <span>Dejavau — ECommerce Dashboard © 2023</span>
            </div>
        </div>
    </>
    )
}