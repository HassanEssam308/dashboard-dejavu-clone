import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';


const Categories = () => {

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.categories)

    useEffect(() => {
        console.log(" categories: " );
        dispatch(changeCategories())



    }, []);

    const deleteCategory = async (categoryId) => {

        if (window.confirm(`Are you sure you want to delete this category ? `)) {
            try {
                await deleteDoc(doc(db, "category", categoryId))
                dispatch(changeCategories())
                console.log("delete category");
            } catch (error) {
                console.log(error);
            }


        }



    }



    return (
        <section>
            <article className='m-4'   >
                <h2 className='my-3 textSmall' >Categories</h2>
                <div className='text-end me-sm-5'>
                    <Link to='/addcategory' >
                        <button type="button" className="btn btn-success rounded-0">
                            + New <span className='d-none d-sm-inline' >Category </span> </button></Link>
                </div>
            </article>
            <main className='mx-auto tableContainer'>

                <div className="table-responsive-md m-sm-4 ">
                    <table className="table table-light text-nowrap ">
                        <thead>
                            <tr style={{fontSize:'90%'}}  >
                                <th  className="ps-sm-3" scope="col">Name</th>
                                <th scope="col">اسم الفئة</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => {
                                return <tr key={category.id} className="">
                                    <td className="ps-sm-3" >{category.name}</td>
                                    <td className="ps-sm-3" >{category.name_ar}</td>
                                    <td > <Link to={`/addcategory/${category.id}`}>
                                        <i className="bi bi-pencil-square mx-sm-2 fs-5  text-warning"  ></i>
                                    </Link>
                                    </td>
                                    <td ><i role="button" className="bi bi-trash3  mx-sm-2 fs-5 text-danger" onClick={() => deleteCategory(category.id)} ></i></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </main>

        </section>
    );
}

export default Categories;
