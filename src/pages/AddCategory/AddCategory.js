
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';

const AddCategory = () => {

    const [titleOfPage, setTitleOfPage] = useState('Add Category');
    const [titleOfButton, setTitleOfButton] = useState('Add ');
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [category, setCategory] = useState({
        name: '',
        name_ar:'',
        details: [],
        details_ar:[],

    });

    const [error, setError] = useState({
        nameError: '',
        name_arError: '',
        titleError: '',
        title_arError: '',
    });

    const { id } = useParams();
    const categories = useSelector((state) => state.categories.categories)

    useEffect(() => {
        console.log("ADD category");
        dispatch(changeCategories())
        if (id) {
            setTitleOfPage('Edit Category')
            setTitleOfButton('Update')
            const category = categories.find(category => category.id == id);
            setCategory({ ...category })
        }

    }, [id]);

    const handelChange = (evt) => {
        switch (evt.target.name) {
            case 'name':
                setError({ ...error, nameError: (evt.target.value.length > 0) ? "" : "Name of Category is Required ", });

                setCategory({ ...category, name: evt.target.value });
                break;
                case 'name_ar':
                    var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd])*$/g;

                    setError({ ...error, name_arError:(!(isArabic.test(evt.target.value)) )?'يجب ادخال احرف عربية فقط':(evt.target.value.length > 0) ? "" : "يجب ادخال اسم الفئة ", });
    
                    setCategory({ ...category,  name_ar: evt.target.value });
                    break;

            case 'title':
                setError({ ...error, titleError: (evt.target.value.length > 0) ? "" : "Title of Category is Required ", });
                setCategory({ ...category, details: [evt.target.value, category.details[1]] });
                break;

                case 'title_ar':
                    setError({ ...error, title_arError: (evt.target.value.length > 0) ? "" : "يجب ادخال العنوان الرئيسي ", });
                    setCategory({ ...category, details_ar: [evt.target.value, category.details_ar[1]] });
                    break;

            case 'subTitle':
                setCategory({ ...category, details: [category.details[0], evt.target.value] });
                break;
                case 'subTitle_ar':
                setCategory({ ...category, details_ar: [category.details_ar[0], evt.target.value] });
                break;
            default:
                return
        }
    }

    const handelSubmit = async () => {

        if (id) {

            try {
                await updateDoc(doc(db, "category", id), category)
                alert('update  category');
                setCategory({
                    name: '',
                    name_ar:'',
                    details: ['', ''],
                    details_ar: ['', ''],
                })
                // console.log(category);
                navigate('/categories')

            } catch (error) {
                console.log(error);
            }
        } else {

            try {
                await addDoc(collection(db, 'category'), category)
                alert('Added category');
                setCategory({
                    name: '',
                    name_ar:'',
                    details: ['', ''],
                    details_ar: ['', ''],
                })
                // console.log(category);
                navigate('/categories')

            } catch (error) {
                console.log(error);
            }


        }

    }

    const goBack = () => { navigate(-1) }

    return (
        <section>
            <article className="mx-3  mx-sm-5  my-4">
                <h2 className="mb-3 textSmall " >{titleOfPage}</h2>
               
                <div className="text-end mb-sm-5 " >
                    <button type="button" 
                    className="btn btn-secondary p-2  px-sm-4 rounded-0" onClick={goBack} >Cancel</button>
                </div>
        

                <form className="row g-3">
                    {/* name */}
                    <div className=" col-md-6">
                        <label htmlFor="name" className="form-label mb-0 ms-1">Name</label>
                        <input type="text" value={category.name} onChange={(e) => handelChange(e)}
                            className="form-control" name="name" id="name" placeholder="category name" />
                        <small className="text-danger">{error.nameError}</small>
                    </div>

                    <div className=" col-md-6" dir='rtl'>
                        <label htmlFor="name_ar" className="form-label mb-0 ms-1">الاسم</label>
                        <input type="text" value={category.name_ar} onChange={(e) => handelChange(e)}
                            className="form-control" name="name_ar" id="name_ar" placeholder="اسم الفئة" />
                        <small className="text-danger">{error.name_arError}</small>

                    </div>

                    {/* Title */}
                    <div className=" col-md-6">
                        <label htmlFor="title" className="form-label mb-0 ms-1">Title</label>
                        <input type="text" value={category.details[0]} onChange={(e) => handelChange(e)}
                            className="form-control" name="title" id="title" placeholder="category title" />
                        <small className="text-danger">{error.titleError}</small>
                    </div>

                    <div className=" col-md-6" dir='rtl'>
                        <label htmlFor="title_ar" className="form-label mb-0 ">العنوان</label>
                        <input type="text" value={category.details_ar[0]} onChange={(e) => handelChange(e)}
                            className="form-control" name="title_ar" id="title_ar" placeholder=" العنوان الرئيسى"  />
                        <small className="text-danger">{error.title_arError}</small>

                    </div>

                    {/* Sub Title  */}

                    <div className="col-md-6">
                        <label htmlFor="subTitle" className="form-label mb-0 ms-1">Sub Title </label>
                        <input type="text" value={category.details[1]} onChange={(e) => handelChange(e)}
                            className="form-control" name="subTitle" id="subTitle" placeholder="category sub title" />
                    </div>

                    <div className="col-md-6" dir='rtl'>
                        <label htmlFor="subTitle_ar" className="form-label mb-0 ">العنوان الفرعى </label>
                        <input type="text" value={category.details_ar[1]} onChange={(e) => handelChange(e)}
                            className="form-control" name="subTitle_ar" id="subTitle_ar" placeholder="العنوان الفرعى" />
                    </div>

                    <div className="text-end " >
                        <button type='button' className={`${(category.name == '' || category.details[0] == '' || category.name_ar == '' || category.details_ar[0] == '') ? "disabled" : ""} btn btn-primary px-4 rounded-0`}
                            onClick={handelSubmit} >{titleOfButton}</button>

                    </div>
                </form>
            </article>
        </section>
    );
}

export default AddCategory;
