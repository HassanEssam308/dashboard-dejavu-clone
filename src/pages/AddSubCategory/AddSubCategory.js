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
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.categories)

    const [subCategory, setSubCategory] = useState({
        name: '',
        details: [],
        img: '',
        category: {
            catid: '',
            catname: '',
        }
    });

    const [error, setError] = useState({
        nameError: '',
        titleError: '',
        subTitleError: '',
        imgError: '',
        categoryError: ''
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
                setError({ ...error, subTitleError: (evt.target.value.length < 1) ? " Sub Title of Sub Category is Required " : (evt.target.value.length < 3) ? " Sub Title must be at least 3 character " : '' });
                setSubCategory({ ...subCategory, details: [subCategory.details[0], evt.target.value] });

                break;
            case 'img':
                setError({ ...error, imgError: (evt.target.value.length < 1) ? "image of Sub Category is Required " : '' });
                setSubCategory({ ...subCategory, img: evt.target.value });

                break;
            case 'category':
                setError({ ...error, categoryError: (evt.target.value != '') ? "" : " Category is Required ", });

                setSubCategory({
                    ...subCategory, category:
                    {
                        catid: JSON.parse(evt.target.value).catid
                        , catname: JSON.parse(evt.target.value).catname
                    }
                });

                break;
            default:
                return
        }
    }


    const handelSubmit = async () => {
        // console.log(subCategory);

        if (id) {

            try {
                await updateDoc(doc(db, "subcategory", id), subCategory)
                alert('updated  Sub Category');
                setSubCategory({
                    name: '',
                    details: ['', ''],
                    img: '',
                    category: {
                        catid: '',
                        catname: '',
                    }
                });
                navigate('/Subcategory')

            } catch (error) {
                console.log(error);
            }
        } else {

            try {


                await addDoc(collection(db, 'subcategory'), subCategory)
                alert('Added  Sub Category');
                setSubCategory({
                    name: '',
                    details: ['', ''],
                    img: '',
                    category: {
                        catid: '',
                        catname: '',
                    }
                });
                navigate('/Subcategory')
            } catch (error) {
                console.log(error);
            }


        }

    }

    const goBack = () => { navigate(-1) }


    return (
        <section>


            <article className="w-75 mx-auto my-4">
                <h2 className="mb-5" >{titleOfPage}</h2>
                {/* <Link to="/"> */}
                <div className="text-end mx-5 " >
                    <button type="button"
                        className="btn btn-secondary px-4 rounded-0"
                        onClick={goBack} >Cancel</button>
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
                    <label htmlFor="subTitle" className="form-label mb-0 ms-1">Sub Title
                    </label>
                    <input type="text" value={subCategory.details[1]}
                        onChange={(e) => handelChange(e)}
                        className="form-control" name="subTitle" id="subTitle" placeholder="category sub title" />
                    <small className="text-danger">{error.subTitleError}</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="img" className="form-label mb-0 ms-1">Image
                    </label>
                    <input type="text" value={subCategory.img}
                        onChange={(e) => handelChange(e)}
                        className="form-control" name="img" id="img" placeholder="Image of sub category" />
                    <small className="text-danger">{error.imgError}</small>
                </div>

                <div className="mb-5">
                    <label htmlFor="category" className="form-label">Select Category :</label>
                    <select
                        value={(subCategory.category.catname == '') ? "default" : JSON.stringify({ catid: subCategory.category.catid, catname: subCategory.category.catname })}
                        defaultValue={"default"}
                        id='category' onChange={(e) => handelChange(e)}
                        className=" form-select" name='category'>

                        <option value={"default"} disabled >Select...</option>
                        {categories.map(category => {
                            return <option key={category.id}
                                value={JSON.stringify({ catid: category.id, catname: category.name })}
                            >{category.name}</option>
                        })}

                    </select>
                    <small className="text-danger">{error.categoryError}</small>
                </div>

                <div className="text-end my-5" >
                    <button type='button' className={`${(subCategory.name == '') ? "disabled" :
                        (subCategory.details[0] == undefined || error.titleError != '') ? "disabled" : (subCategory.details[1] == undefined || error.subTitleError != '') ? "disabled" : (subCategory.category.catname == '') ? "disabled" : ""}
                          btn btn-primary px-4 rounded-0`}
                        onClick={handelSubmit} >{titleOfButton}</button>
                </div>


            </article>
        </section>

    );
}

export default AddSubCategory;
