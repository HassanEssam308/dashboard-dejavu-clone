import React, { useEffect, useState } from "react";
import { Card, Col, Button, Row, Container } from "react-bootstrap";
import "../Customer/Customer.css"
import { db } from "../../config/firestore_config";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";

export default function Customer() {
    console.log("Customer");

    const {id} = useParams();
    const [userDetails, setUserDetails] = useState({});

    
  function  getUser(id){
        onSnapshot(doc(db, "users",id ), (doc) => {
            console.log("Current data: ", doc.data());
            setUserDetails({ ...doc.data(), id: doc.id })
        });
    }
    useEffect(() => {
        getUser(id)
    }, []);


   
    const customer = [
        {
            name: "Jessica Moore",
            email: "jessica-moore@example.com",
            phone: "+38 (094) 730-24-25",
            img: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-1-96x96.jpg"
        }
    ]
    const Order = [
        { num: 80294, date: "Today at 6:10 pm", status: "Pending", itemCount: 4 + " " + "items", cost: "$" + "320.00" },
        { num: 63736, date: "May 15, 2019 4:00    ", status: "Completed", itemCount: 7 + " " + "items", cost: "$" + "2,574.31" },
        { num: 63501, date: "January 7, 2019", status: "Completed", itemCount: 1 + " " + "items", cost: "$" + "34.00" },
        { num: 40278, date: "October 19, 2018", status: "Completed", itemCount: 2 + " " + "items", cost: "$" + "704.00" },
    ]

    return (
        <>


            {/* <div className='container-fluid bg-light'>
            <section className='row'> */}

            {customer.map((custom) => {
                return <Container className="container-fluid p-50">
                    <Row>
                 
                    <div>
                        <a href='#' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text ms-2'>Customers</span>
                        <span className='text'> /</span>
                        <span className='text ms-2'>Jessica Moore</span>
                    </div>
                    <div>
                        <h3>Jessica Moore</h3>    
                    </div>   
                
                        <Col md={4}>
                            <Card className="shadow">
                                <Card.Body >
                                    <div className="pho">
                                        <img className="s" src={custom.img} />
                                        <Card.Title >
                                            {custom.name}
                                        </Card.Title>
                                        <a href="#" ><p>{custom.email}</p></a>
                                        <a>{custom.phone}</a>
                                    </div>

                                    <hr />
                                    <h6>Last Order</h6>
                                    <p>7 days ago - <a href="#">#80294</a></p>
                                    <h6>Average Order Value</h6>
                                    <p>$574.00</p>
                                    <h6>Registered</h6>
                                    <p>2 months ago</p>
                                    <h6>Email Marketingr</h6>
                                    <p>Subscribed</p>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card className="ssd">
                                <div class="form-outline">
                                    <textarea  class="form-control" id="textAreaExample" rows="3" placeholder="Notes about customer"></textarea> 
                                </div>
                            </Card><br/>
                            <Card className="shadow">
                                <div className="sec1">
                                    <h4>Orders</h4>
                                    <p>Total spent $34,980.34 on 7 orders</p>
                                </div>
                                <hr />

                                {Order.map((orders) => {
                                    return <div className="ord">

                                        <a href="#">#{orders.num}</a>
                                        <p>{orders.date}</p>
                                        <td><p>{orders.status}</p></td>
                                        <p>{orders.itemCount}</p>
                                        <p>{orders.cost}</p>


                                    </div>

                                })}
                                <hr />
                                <a href="#" style={{ textAlign: "center", padding: "5px" }}>View All 7 Orders</a>
                            </Card><br/>
                            <Card className="shadow">
                            <div className="sec1">
                                    <h4>Adresses</h4>
                                   <a href="#">New adress</a> 
                                </div>
                                <hr/>
                                <div>
                                    <h6>Jessica Moore</h6>
                                    <p>Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178</p>
                                </div>
                                <hr/>
                                <div>
                                    <h6>Neptune Saturnov</h6>
                                    <p>Earth 4b4f53, MarsGrad Sun Orbit, 43.3241-85.239</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>


                </Container>

            })}


            {/* <div>
                        <a href='#' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text ms-2'>Customer List</span>
                    </div>
                    <div>
                        <h3>Customer List</h3>    
                    </div>   
                </div>
                <div className='col-2 mt-5'>
                <button type="button" className="button">New customer</button>
                </div>
            </section>
            <div>
            <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><input className='checkbox' type='checkbox'></input></th>
                        <th scope="col">Name</th>
                        <th scope="col">Registered</th>
                        <th scope="col">Country</th>
                        <th scope="col">Group</th>
                        <th scope="col">Spent</th>
                       
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    customer.map((record,index)=>{
                    return <tr key={index}>
                    <td><input className='checkbox' type='checkbox'></input></td>
                    <td>
                        <div>
                        <img src={record.img}/>  
                      
                            
                         
                        
                       
                        </div>
                       
                    </td>
                    <td>{record.registered}</td>
                    <td><a href='#' className='record'>{record.country}</a></td>
                    <td><p className='record-bg1'>{record.group}</p></td>
                    <td><p className='record-bg2'>${record.spent}</p></td>
                 
                 
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
                </div> */}
            {/* </section>
                </div> */}
        </>
    )
}