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

   const deleteSubCategory=async (subCatId)=>{

 if(  window.confirm(`Are you sure you want to delete this Sub category ?`) ){
        try {
            await deleteDoc(doc(db,"subcategory",subCatId))
            dispatch(changeSubCategories())
            console.log("delete category");
        } catch (error) {
            console.log(error);
        }
      

      }
      
   }

    return (

        <section>
            <article className='m-sm-4' >
                <h2 className=''> Sub Category </h2>
                <div className='text-end me-sm-5'>
                    <Link to='/addSubCategory' >
                        <button type="button" className="btn btn-success rounded-0">
                            + New Sub Category </button></Link>
                </div>
            </article>
            <div className="table-responsive-md m-sm-4 ">
                <table className="table table-light ">
                    <thead>
                        <tr>
                            <th className="ps-sm-3" scope="col">Name</th>
                            <th className="ps-sm-3" scope="col">Category</th>
                            <th scope="col">Edite</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subCategories.map((subCat) => {

                            return <tr key={subCat.id} className="">

                                <td className="ps-sm-3" >{subCat.name}</td>
                                <td className="ps-sm-3" >{getNameOfCategory(subCat.catid)}</td>
                                <td > <Link to={`/addSubCategory/${subCat.id}`}>
                                    <i className="bi bi-pencil-square mx-sm-2 fs-4 text-warning"></i>
                                </Link>
                                </td>
                                <td ><i role="button" onClick={() => deleteSubCategory(subCat.id)} className="bi bi-trash3  mx-sm-2 fs-4 text-danger" ></i></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>


        </section>
    );
}

export default SubCategory;
