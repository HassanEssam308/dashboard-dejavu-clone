import { Link } from 'react-router-dom'
import './CustomerList.css'



export default function CustomerList()
{

    
    const customer = [
    
        {number:3451,name:'loniel mark',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-2-40x40.jpg",registered:'July 20, 2021',country:'USA',group:'Wholesale',spent:34.324},
       
        {number:3451,name:'Brian Wood',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-7-40x40.jpg",registered:'Dec 18, 2020',country:'USA',group:'Wholesale',spent:22.984},
      
        {number:3451,name:'Kevin Smith',img : "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-6-40x40.jpg",registered:'Apr 6, 2021',country:'Germany',group:'Wholesale',spent:30.489},
        

    ] 

    return (
        <>
        <div className='container-fluid bg-light'>
            <section className='row'>
                <div className='col m-4'>
                    <div>
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
                    customer.map((record1,index)=>{
                    return <tr key={index}>
                    <td><input className='checkbox' type='checkbox'></input></td>
                    <td>
                        <div>
                        <img src={record1.img}/>  
                      
                             <Link  className='record'>{'  '}{record1.name}</Link><br/>  
                         
                        
                       
                        </div>
                       
                    </td>
                    <td>{record1.registered}</td>
                    <td><a href='#' className='record'>{record1.country}</a></td>
                    <td><p className='record'>{record1.group}</p></td>
                    <td><p className='record'>${record1.spent}</p></td>
                 
                 
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