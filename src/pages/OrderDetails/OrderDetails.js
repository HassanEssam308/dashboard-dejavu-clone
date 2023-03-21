import './OrderDetails.css'

export default function OrderDetails()
{
    return (
        <>
        <div className='container-fluid bg-light'>
            <section className='row'>
                    <div className='col m-4'>
                        <div>
                            <a href='#' className='dashboard'>Dashboard</a>
                            <span className='text'>/</span>
                            <span className='text mx-2'>Orders</span>
                            <span className='text'>/</span>
                            <span className='text mx-2'>Order #7789</span>
                        </div>
                        <div className=''>
                            <h3 className='d-inline me-2'>Orders</h3>
                            <h3 className='d-inline'>#7789</h3>    
                        </div>
                    </div>
                    <div className='col-2 mt-5'>
                    <button type="button" className="button1 me-2">Delete</button>
                    <button type="button" className="button2">Edit</button>
                    </div>
                </section>
                <hr className='mx-4 me-5'/>
                <div>
                    <span className='mx-3 ms-5 text1'>October 7, 2020 at 9:08 pm</span>
                    <span className='text-secondary'>|</span>
                    <span className='mx-3 text1'>6 items</span>
                    <span className='text-secondary'>|</span>
                    <span className='mx-3 text1'>Total $5,882.00</span>
                    <span className='text-secondary'>|</span>
                    <span className='mx-3 text1 bg1'>Paid</span>
                    <span className='text-secondary'>|</span>
                    <span className='mx-3 text1 bg2'>yes</span>
                </div>
                <hr className='mx-4 me-5'/>
                <section>
                    <div>
                    <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><h2>Items</h2></th>
                        <th scope="col"></th>
                        <th scope='col'></th>
                        <th scope="col"><a href='#' className='recordItem'>Edit items</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://cdn.shopify.com/s/files/1/0499/3079/7217/products/GPS-DVTH-031-D.BROWN_1_360x.jpg?v=1671126270' alt='' width={70}/>
                            <span className='ms-2'>XKK-DVTH-003</span>
                        </td>
                        <td> <p>$849.00</p> </td>
                        <td> <p>1</p> </td>
                        <td> <p>$849.00</p> </td>
                    </tr>
                    <tr>
                        <td>
                            <img src='https://cdn.shopify.com/s/files/1/0499/3079/7217/products/LID-DJTT-054-M.DENIM_2_1024x.jpg?v=1678803759' alt='' width={70}/>
                            <span className='ms-2'>LID-DJTT-054</span>
                        </td>
                        <td> <p>$699.00</p> </td>
                        <td> <p>2</p> </td>
                        <td> <p>$1,398.00</p> </td>
                    </tr>
                    <tr>
                        <td>
                            <img src='https://cdn.shopify.com/s/files/1/0499/3079/7217/products/RUI-DJTT-001-GOLD_2_1024x.jpg?v=1666519135' alt='' width={70}/>
                            <span className='ms-2'>RUI-DJTT-001</span>
                        </td>
                        <td> <p>$1,210.00</p> </td>
                        <td> <p>3</p> </td>
                        <td> <p>$3,630.00</p> </td>
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
                            <p>$5,877.00</p>
                            <p>$-20.00</p>
                            <p>$25.00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Total</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <p>$5,882.00</p>
                        </td>
                    </tr>
                </tbody>
                </table>
                </div>
            <div className="table-responsive mx-4 mb-5 bg-white p-2 shadow">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><h2>Transactions</h2></th>
                        <th scope="col"></th>
                        <td><a href='#' className='record'>Add transaction</a></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>  
                        <p>Payment</p>
                        <p className='text-secondary'>via PayPal</p>
                        </td>
                        <td>
                        <p>October 7, 2020</p>
                        </td>
                        <td>
                        <p>$2,000.00</p>
                        </td>
                    </tr>
                    <tr> <td>  
                        <p>Payment</p>
                        <p className='text-secondary'>from account balance</p>
                        </td>
                        <td>
                        <p>November 2, 2020</p>
                        </td>
                        <td>
                        <p>$50.00</p>
                        </td></tr>
                    <tr>
                    <td>  
                        <p>Refund</p>
                        <p className='text-secondary'>to PayPal</p>
                        </td>
                        <td>
                        <p>December 10, 2020</p>
                        </td>
                        <td>
                        <p className='text-danger'>$-325.00</p>
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
                        <p>$5,882.00</p>
                        <p>$0.00</p>
                        </td>
                    </tr>
                    <tr> <td>  
                        <p>Paid by customer</p>
                        <p>Refunded</p>
                        </td>
                        <td>
                        <p>$-80.00</p>
                        <p>$0.00</p>
                        </td>
                        </tr>
                    <tr>
                    <td>  
                        <p>Balance <span>(customer owes you)</span></p>
                        </td>
                        <td>
                        <p>$5,802.00</p>
                        </td>
                    </tr>
                </tbody>
                </table>
                </div>
                    </div>
                </section>
                <hr/>
            <div className='ms-5 mb-4'>
                <span>Dejavau — ECommerce Dashboard © 2023</span>
            </div>
        </div>
        </>
    )
}