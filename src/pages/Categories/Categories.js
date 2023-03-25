import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../../config/firestore_config';

const Categories = () => {

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.categories)

    useEffect(() => {

        dispatch(changeCategories())



    }, []);

    const deleteCategory= async (categoryId)=>{
       
      if(  window.confirm(`Are you sure you want to delete this category ? `) ){
        try {
            await deleteDoc(doc(db,"category",categoryId))
            dispatch(changeCategories())
            console.log("delete category");
        } catch (error) {
            console.log(error);
        }
      

      }
       
        

    }





    // useEffect(() => {
    //      getCategories()

    // }, []);

    // const getCategories = async () => {

    //     try {
    //         const response = await getDocs(collection(db, "category"));
    //         const categoriesOfDB = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //         console.log(categoriesOfDB);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    return (
        <section>
            <nav className="nav justify-content-center  ">
                <Link to='/SubCategory' className="nav-link active" >Subcategory</Link>


            </nav>
            <article className='m-sm-4' >
                <h2 className='h6.'>Categories</h2>
                <div className='text-end me-sm-5'>
                    <Link to='addcategory' >
                        <button type="button" className="btn btn-success rounded-0">
                            + New Category </button></Link>
                </div>
            </article>
            <div className="table-responsive-md m-sm-4 ">
                <table className="table table-light ">
                    <thead>
                        <tr>
                            <th className="ps-sm-3" scope="col">Name</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => {
                            return <tr key={category.id} className="">
                                <td className="ps-sm-3" >{category.name}</td>
                                <td > <Link to={`/addcategory/${category.id}`}> 
                                 <i className="bi bi-pencil-square mx-sm-2 fs-4 text-warning"></i> 
                                 </Link>
                                </td>
                                <td ><i role="button" className="bi bi-trash3  mx-sm-2 fs-4 text-danger" onClick={()=>deleteCategory(category.id)} ></i></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>


        </section>
    );
}

export default Categories;
