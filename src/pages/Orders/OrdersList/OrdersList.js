import { Link } from 'react-router-dom'
import './OrdersList.css'

export default function OrdersList()
{
    const records = [
        {number:3451,date:'June 26, 2021',customer:'Jessica Moore',paid:'yes',status:'New',items:3,total:200.00},
        {number:4412,date:'Feb 5, 2021',customer:'Jone mark',paid:'no',status:'Pending',items:2,total:400.00},
        {number:5478,date:'July 20, 2021',customer:'loniel mark',paid:'yes',status:'New',items:8,total:800.00},
        {number:7548,date:'Aug 1, 2020',customer:'Helena Garcia',paid:'no',status:'Pending',items:10,total:1000.00},
        {number:7789,date:'Jan 9, 2020',customer:'Ryan Ford',paid:'Partial',status:'New',items:20,total:150.00},
        {number:8001,date:'Dec 18, 2020',customer:'Jessica Moore',paid:'yes',status:'New',items:3,total:700.00},
        {number:8545,date:'Nov 30, 2020',customer:'Jone mark',paid:'yes',status:'Pending',items:4,total:500.00},
        {number:9101,date:'Fab 25, 2020',customer:'Ryan Ford',paid:'no',status:'New',items:9,total:285.00},
        {number:9546,date:'Apr 6, 2021',customer:'Jessica Moore',paid:'yes',status:'New',items:1,total:365.00},
        {number:9895,date:'Jun 7, 2021',customer:'Jessica Moore',paid:'Partial',status:'Shipped',items:3,total:200.00},
    ] 

    return (
        <>
        <div className='container-fluid bg-light'>
            <section className='row'>
                <div className='col m-4'>
                    <div>
                        <a href='#' className='dashboard'>Dashboard</a>
                        <span className='text'>/</span>
                        <span className='text ms-2'>Orders</span>
                    </div>
                    <div>
                        <h3>Orders</h3>    
                    </div>   
                </div>
                <div className='col-2 mt-5'>
                <button type="button" className="button">New Orders</button>
                </div>
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
                        <th scope="col">Status</th>
                        <th scope="col">Items</th>
                        <th scope="col">Total</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    records.map((record,index)=>{
                    return <tr key={index}>
                    <td><input className='checkbox' type='checkbox'></input></td>
                    <td><Link to='/OrderDetails' className='record'>#{record.number}</Link></td>
                    <td>{record.date}</td>
                    <td><a href='#' className='record'>{record.customer}</a></td>
                    <td><p className='record-bg1'>{record.paid}</p></td>
                    <td><p className='record-bg2'>{record.status}</p></td>
                    <td>{record.items} items</td>
                    <td>${record.total}</td>
                    <td><button>:</button></td>
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