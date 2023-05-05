import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';
import changeSubCategories from '../../store/Actions/subCategoriesAction';



const SubCategory = () => {

    const dispatch = useDispatch()
    const subCategories = useSelector((stat) => stat.subCategories.subCategories)
    const categories = useSelector((stat) => stat.categories.categories)

    useEffect(() => {
        console.log('SubCategory');

        dispatch(changeSubCategories())
        dispatch(changeCategories())


    }, []);

    const getNameOfCategory = (idOfCategory) => {
        if (categories.length > 0) {
            let cat = categories.find((cat) => cat.id == idOfCategory)
            return (cat.name)
        } else {
            return ""
        }
    };

    const deleteSubCategory = async (subCatId) => {

        if (window.confirm(`Are you sure you want to delete this Sub category ?`)) {
            try {
                await deleteDoc(doc(db, "subcategory", subCatId))
                dispatch(changeSubCategories())
                console.log("delete category");
            } catch (error) {
                console.log(error);
            }


        }

    }

    return (

        <section className='container-fluid  ' >
            <article className='m-sm-4' >
                <h2 className='textSmall mt-3 ' > Sub Category </h2>
                <div className='text-end me-md-5'>
                    <Link to='/addSubCategory' >
                        <button type="button" className="btn btn-success rounded-0 textSmall  "  >
                            + New <span className='d-none d-sm-inline'>Sub Category </span></button></Link>
                </div>
            </article>

                <main className='text-nowrap '>
                    <div className=" m-lg-4  tableContainer   ">
                        <table className="table table-light text-center">
                            <thead>
                                <tr>
                                    <th  >image</th>
                                    <th  >Name</th>
                                    <th  >الاسم</th>
                                    <th  >Category</th>
                                    <th  >الفئة</th>
                                    <th  >Edit</th>
                                    <th  >Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {subCategories.map((subCat) => {

                                    return <tr key={subCat.id}  >
                                        <td >
                                            <img src={subCat.img} alt={subCat.name} width={'30'} />
                                        </td>

                                        <td  > {subCat.name} </td>
                                        <td  > {subCat.name_ar}</td>

                                        <td  >
                                            {subCat.category.catname}</td>
                                        <td  >
                                            {subCat.category.catname_ar}
                                        </td>

                                        <td >
                                            <Link to={`/addSubCategory/${subCat.id}`}>
                                                <i className="bi bi-pencil-square mx-sm-2 fs-4 text-warning" ></i>
                                            </Link>
                                        </td>
                                        <td ><i role="button" onClick={() => deleteSubCategory(subCat.id)} className="bi bi-trash3  mx-sm-2 fs-4 text-danger"  ></i></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </main>
          

        </section>
    );
}

export default SubCategory;
