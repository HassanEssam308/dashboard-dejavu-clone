import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import ProductsList from '../../store/Actions/ProductsList';
import './product.css'
import changeCategories from '../../store/Actions/categoriesAction';
import changeSubCategories from '../../store/Actions/subCategoriesAction';

import { async } from '@firebase/util';

const Products1 = () => {

    const dispatch = useDispatch();
    const [quer, setquer] = useState('');
    const [product, setproduct] = useState([]);
    const productslist = useSelector((state) => state.products.products);
    const categories1 = useSelector((stat) => stat.categories.categories);
    const subcategory = useSelector((stat) => stat.subCategories.subCategories);
    const [name, setname] = useState({});
    // console.log(productslist);


    useEffect(() => {
        console.log('Products1');
        dispatch(ProductsList());
        dispatch(changeCategories());
        dispatch(changeSubCategories());


        //console.log(product);
        //console.log(product);
      
    }, [])

    const categoryname1 = (catid) => {
        console.log(catid);
        if (categories1.length > 0) {
            console.log(categories1);
            if (categories1.find((cat) => cat.id == catid)) {
                //setname(cat1);
                return (categories1.find((cat) => cat.id == catid).name);
            }

        } else {
            return '';
        }

    }
    const subcategoryname = (subid) => {
        if (subcategory.length > 0) {
            //console.log(subcategory);
            console.log(productslist);
            if (subcategory.find((subcategory) => subcategory.id == subid)) {
                //setname(cat1);
                return (subcategory.find((subcategory) => subcategory.id == subid).name);
            }

        } else {
            return '';
        }

    }

    /*  const getNameOfCategory = (idOfCategory) => {
         if (categories.length > 0) {
             let cat = categories.find((cat) => cat.id == idOfCategory)
             console.log(cat.name);
             return (cat.name)
         } else {
             return ""
         }
     }; */
    const getquntity = (prd) => {
        let quntity = 0;
        for (let i in prd) {
            quntity += prd[i];
            console.log(prd[i]);
        }
        console.log(prd);
        if (quntity <=2) {
            return(<td style={{ width: 100, color: '#900', backgroundColor: '#ffdcdc', fontSize: '.9em', padding: '0.35em 0.65em'}}>{quntity} in stock</td>)
        }else if(quntity>2){
            return(<td style={{ width: 100, color: ' #245900', backgroundColor: '#def2d0', fontSize: '.9em', padding: '0.35em 0.65em'}}>{quntity} in stock</td>)

        }

    }
    const deleteproduct = (prdid) => {

        const docRef = doc(db, "product", prdid);
        if (window.confirm("Entire Document Will Deleted")) {
            deleteDoc(docRef).then(() => {
                dispatch(ProductsList());
                console.log("Entire Document has been deleted successfully.")
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <div className="container-fluid">
                <span className="productnav m-sm-4">
                    <Link to='Dashoard' className="nav-link text-primary-emphasis d-inline" >Dashoard </Link>
                    <Link to='/Products' className="nav-link text-primary-emphasis d-inline"> /Products</Link>
                </span>
                <div className="row m-sm-4">
                    <h3 className="col-md-9 ">  Products</h3>
                    <div className='col-md-3'>
                        <Link to='/addproduct' >
                            <button type="button" className="btn btn-warning rounded-0"> New Product </button></Link>
                    </div>
                </div>
                <div className="table-responsive-md  ">
                    <div className="form-outline" style={{ width: '40' }}>
                        <input
                            type="search" id="form1"
                            className="form-control rounded-0"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setquer(e.target.value.toUpperCase())}
                        />
                    </div>

                    <table className="table-responsive mx-1 mb-5 bg-white p-1 shadow">
                        <thead>
                            <tr>

                                <th className="ps-sm-3" scope="col">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">SubCategory</th>
                                <th scope="col">Quntity</th>
                                <th scope="col">Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#033E3E' }}>
                            {productslist.filter(
                                (prd) => prd.name.includes(quer)).map((prd) => {
                                    return (

                                        <tr key={prd.id}>

                                            <td className="col-md-3 fst-italic text-info-emphasis">
                                                <img src={prd.imgs[0]} className="col-2 shadow-sm border border-1 rounded-2 m-2" alt="" />
                                                <Link to={`/addproduct/${prd.id}`} className="text-decoration-none text-dark">{prd.name}</Link>
                                            </td>


                                            <td className="col-md-2 fst-italic">
                                                {categoryname1(prd.catid)}


                                            </td>
                                            <td className="col-md-2 fst-italic">
                                                {subcategoryname(prd.subid)}


                                            </td>
                                            <td className='col-md fst-italic'>
                                                {getquntity(prd.colors)}
                                            </td>
                                            <td className="col-md fst-italic">
                                            ${prd.new_price}
                                            </td>

                                            <td className='col-md fst-italic'>
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        :
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to={`/addproduct/${prd.id}`} className="dropdown-item text-warning" >Edit</Link></li>
                                                        <li className="dropdown-item text-danger" onClick={() => deleteproduct(prd.id)} >Delete</li>

                                                    </ul>
                                                </div>

                                            </td>
                                        </tr>

                                    );

                                })}


                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )

}
export default Products1;