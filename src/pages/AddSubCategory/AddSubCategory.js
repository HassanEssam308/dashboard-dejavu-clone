import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';
import changeSubCategories from '../../store/Actions/subCategoriesAction';

const AddSubCategory = () => {

    const [titleOfPage, setTitleOfPage] = useState('Add Sub Category');
    const [titleOfButton, setTitleOfButton] = useState('Add ');
     const navigate= useNavigate()
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.categories)

    const [subCategory, setSubCategory] = useState({
        name: '',
        details: [],
        catid: ''
    });

    const [error, setError] = useState({
        nameError: '',
        titleError: '',
        subTitleError: '',
        catidError: ''
    });

    const { id } = useParams();
    const subCategories = useSelector((state) => state.subCategories.subCategories)

    useEffect(() => {
        dispatch(changeSubCategories())
        dispatch(changeCategories())
        if (id) {
            setTitleOfPage('Edit Sub Category')
            setTitleOfButton('Update')
            const subCate = subCategories.find(item => item.id == id);
            setSubCategory({ ...subCate })
        }

    }, [id,]);

    const handelChange = (evt) => {
        switch (evt.target.name) {
            case 'name':
                setError({ ...error, nameError: (evt.target.value.length > 0) ? "" : "Name of Sub Category is Required ", });

                setSubCategory({ ...subCategory, name: evt.target.value });
                break;
            case 'title':
                setError({ ...error, titleError: (evt.target.value.length > 0) ? "" : "Title of Sub Category is Required ", });
                setSubCategory({ ...subCategory, details: [evt.target.value, subCategory.details[1]] });

                break;
            case 'subTitle':
                setError({ ...error, subTitleError: (evt.target.value.length > 0) ? "" : " Sub Title of Sub Category is Required ", });
                setSubCategory({ ...subCategory, details: [subCategory.details[0], evt.target.value] });
                break;
            case 'catid':
                setError({ ...error, catidError: (evt.target.value.length > 0) ? "" : " Sub Title of Sub Category is Required ", });
                setSubCategory({ ...subCategory, catid: evt.target.value });
                break;
            default:
                return
        }
    }


    const handelSubmit = async () => {

        if (id) {

            try {
                await updateDoc(doc(db,"subcategory", id), subCategory)
                alert('updated  Sub Category');
                setSubCategory({
                    name: '',
                    details: ['', ''],
                    catid: ''
                });
                navigate('/Subcategory')

            } catch (error) {
                console.log(error);
            }
        } else {

            try {
             

                await addDoc(collection(db,'subcategory'), subCategory)
                alert('Added  Sub Category');
                setSubCategory({
                    name: '',
                    details: ['', ''],
                    catid: ''
                });
                navigate('/Subcategory')
            } catch (error) {
                console.log(error);
            }


        }

    }

  const goBack =()=>{navigate(-1)}


    return (
        <section>


            <article className="w-75 mx-auto my-4">
                <h2 className="mb-5" >{titleOfPage}</h2>
                {/* <Link to="/"> */}
                    <div className="text-end " >
                        <button   type="button" 
                        className="btn btn-secondary px-4 rounded-0" onClick={goBack} >Cancel</button>
                    </div>
                {/* </Link> */}

                <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-0 ms-1">Name</label>
                    <input type="text" value={subCategory.name} onChange={(e) => handelChange(e)}
                        className="form-control" name="name" id="name" placeholder="category name" />
                    <small className="text-danger">{error.nameError}</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label mb-0 ms-1">Title</label>
                    <input type="text" value={subCategory.details[0]} onChange={(e) => handelChange(e)}
                        className="form-control" name="title" id="title" placeholder="category title" />
                    <small className="text-danger">{error.titleError}</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="subTitle" className="form-label mb-0 ms-1">Sub Title </label>
                    <input type="text" value={subCategory.details[1]} onChange={(e) => handelChange(e)}
                        className="form-control" name="subTitle" id="subTitle" placeholder="category sub title" />
                    <small className="text-danger">{error.subTitleError}</small>
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="form-label">Select category :</label>
                    <select value={subCategory.catid} onChange={(e) => handelChange(e)} defaultValue={''}
                        className="form-select" name='catid' id="category">
                        <option value="" disabled >Select...</option>
                        {categories.map(category => {

                            return <option key={category.id} value={category.id}>{category.name}</option>
                        })}

                    </select>
                    <small className="text-danger">{error.catidError}</small>
                </div>

                <div className="text-end my-5" >
                    <button type='button' className={`${(subCategory.name == '' || subCategory.details[0] == '' ||
                        subCategory.details[1] == '' || subCategory.catid == '') ? "disabled" : ""} btn btn-primary px-4 rounded-0`}
                        onClick={handelSubmit} >{titleOfButton}</button>
                   </div>


            </article>
        </section>

    );
}

export default AddSubCategory;
