import { Link, useNavigate } from "react-router-dom"
import { db } from '../../config/firestore_config';
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react';

export default function AddOrder() {
    console.log("ADD ORDER");
    const [order, setOrder] = useState({
        customer: '',
        img: '',
        productName: '',
        count: '',
        price: '',
        paid: '',
    });

    const navigate = useNavigate();

    let datetimeNow = new Date();

    const addOrder = async () => {
        const docRef = await addDoc(collection(db, "Orders"), {
            customer: order.customer,
            img: order.img,
            productName: order.productName,
            paid: order.paid,
            count: order.count,
            price: order.price,
            balanceOrder: (Number(order.count) * Number(order.price)) + 5,
            date: datetimeNow.toUTCString(),
        });
        console.log("Document written with ID: ", docRef.id);
        alert('adddedd')
        navigate("/ordersList")
    }

    const handleform = (e) => {
        switch (e.target.name) {
            case 'customer':
                setOrder({ ...order, customer: e.target.value });
                break;
            case 'img':
                setOrder({ ...order, img: e.target.value });
                break;
            case 'productName':
                setOrder({ ...order, productName: e.target.value });
                break;
            case 'count':
                setOrder({ ...order, count: e.target.value });
                break;
            case 'price':
                setOrder({ ...order, price: e.target.value });
                break;
            case 'paid':
                setOrder({ ...order, paid: e.target.value });
                break;
            default:
                return '';
        }
    }

    return (
        <>
            <div className='container-fluid mt-5'>
                <span className="productnav m-md-4">
                    <Link to='/' className="nav-link text-primary-emphasis d-inline"> Dashoard </Link>
                    <Link to='/ordersList' className="nav-link text-primary-emphasis d-inline"> / Orders</Link>
                    <span className="nav-link text-primary-emphasis d-inline">  / Add Order</span>
                </span>
                <div className="row m-sm-4">
                    <h3 className="col-md-9 ">  Add Order</h3>
                    <div className='col-md-3'>
                        <Link to='/ordersList' >
                            <button type="button" className="btn btn-warning rounded-0 px-5"> Back </button></Link>
                    </div>
                </div>
                <form>
                    <div className="container-fluid" style={{ width: '70%' }}>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="customer" className="col-sm-2 col-form-label">Customer Name :</label>
                            <div className="col-sm-10">
                                <input name='customer' type="text" className="form-control" id="customer" placeholder="Enter Your Name" value={order.customer} 
                                    onChange={(e) => handleform(e)} />
                            </div>
                        </div>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="prdName" className="col-sm-2 col-form-label">Product Name :</label>
                            <div className="col-sm-10">
                                <input name='productName' type="text" className="form-control" id="prdName" placeholder="Enter Product Name"  value={order.productName}
                                    onChange={(e) => handleform(e)} />
                            </div>
                        </div>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="img" className="col-sm-2 col-form-label">Image :</label>
                            <div className="col-sm-10">
                                <input name='img' type="text" className="form-control" id="img" placeholder="Enter URL of Image" value={order.img}
                                    onChange={(e) => handleform(e)}  />
                            </div>
                        </div>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="count" className="col-sm-2 col-form-label">count :</label>
                            <div className="col-sm-10">
                                <input name='count' type="number" className="form-control" id="count" placeholder="Enter count of product" value={order.count}
                                    onChange={(e) => handleform(e)}  />
                            </div>
                        </div>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="price" className="col-sm-2 col-form-label">price :</label>
                            <div className="col-sm-10">
                                <input name='price' type="number" className="form-control" id="price" placeholder="Enter Price of product" value={order.price}
                                    onChange={(e) => handleform(e)}  />
                            </div>
                        </div>
                        <div className="form-group coulmn mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Paid :</label>
                            <div className="col-sm-10">
                                <input name='paid' type="text" className="form-control" id="name" placeholder="You paid by via. Please Enter Yes or No"  value={order.paid}
                                    onChange={(e) => handleform(e)} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button type="button" className="btn btn-success px-5 py-2" onClick={() => addOrder()}>Add Order</button>
                    </div>
                </form>
            </div>

        </>
    )

}