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
        name_ar: '',
        details_ar: [],
        details: [],
        img: '',
        category: {
            catid: '',
            catname: '',
            catname_ar: '',
        }
    });

    const [error, setError] = useState({
        nameError: '',
        name_arError: '',
        titleError: '',
        title_arError: '',
        subTitle_arError: '',
        subTitleError: '',
        imgError: '',
        categoryError: ''
    });

    const { id } = useParams();
    const subCategories = useSelector((state) => state.subCategories.subCategories)

    useEffect(() => {
        console.log("ADD subCategory");
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
        var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd])*$/g;

        switch (evt.target.name) {
            case 'name':
                setError({ ...error, nameError: (evt.target.value.length > 0) ? "" : "Name of Sub Category is Required ", });

                setSubCategory({ ...subCategory, name: evt.target.value });
                break;

            case 'name_ar':
                setError({ ...error, name_arError: (!(isArabic.test(evt.target.value))) ? 'يجب ادخال احرف عربية فقط' : (evt.target.value.length > 0) ? "" : "يجب ادخال اسم الفئة الفرعية ", });

                setSubCategory({ ...subCategory, name_ar: evt.target.value });
                break;

            case 'title':
                setError({ ...error, titleError: (evt.target.value.length > 0) ? "" : "Title of Sub Category is Required ", });
                setSubCategory({ ...subCategory, details: [evt.target.value, subCategory.details[1]] });
                break;

            case 'title_ar':
                setError({ ...error, title_arError: (!(isArabic.test(evt.target.value))) ? 'يجب ادخال احرف عربية فقط' : (evt.target.value.length > 0) ? "" : "عنوان الفئة  مطلوب ", });
                setSubCategory({ ...subCategory, details_ar: [evt.target.value, subCategory.details_ar[1]] });
                break;

            case 'subTitle':
                setError({ ...error, subTitleError: (evt.target.value.length < 1) ? " Sub Title of Sub Category is Required " : (evt.target.value.length < 3) ? " Sub Title must be at least 3 character " : '' });
                setSubCategory({ ...subCategory, details: [subCategory.details[0], evt.target.value] });
                break;

            case 'subTitle_ar':
                setError({ ...error, subTitle_arError: (!(isArabic.test(evt.target.value))) ? 'يجب ادخال احرف عربية فقط' : (evt.target.value.length < 1) ? " العنوان الفرعي للفئة مطلوب  " : (evt.target.value.length < 3) ? " يجب ان يكون اكثر من ثلاثةاحرف " : '' });
                setSubCategory({ ...subCategory, details_ar: [subCategory.details_ar[0], evt.target.value] });
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
                        , catname: JSON.parse(evt.target.value).catname,
                        catname_ar: JSON.parse(evt.target.value).catname_ar
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
                    name_ar: '',
                    details_ar: [],
                    details: [],
                    img: '',
                    category: {
                        catid: '',
                        catname: '',
                        catname_ar: '',
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
                    name_ar: '',
                    details_ar: [],
                    details: [],
                    img: '',
                    category: {
                        catid: '',
                        catname: '',
                        catname_ar: '',
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


            <article className=" mx-2 mx-md-5 my-4">
                <h2 className=" mb-5 mb-sm-5 textSmall ">{titleOfPage}</h2>

                <div className="text-end m-1 mx-sm-5 " >
                    <button type="button"
                        className="btn btn-secondary py-0 px-sm-4 rounded-0 textSmall"
                        onClick={goBack} >Cancel</button>
                </div>

                <form className="row g-3">
                    {/* name */}
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label mb-0 ms-1">Name</label>
                        <input type="text" value={subCategory.name} onChange={(e) => handelChange(e)}
                            className="form-control" name="name" id="name" placeholder=" sub category name" />
                        <small className="text-danger">{error.nameError}</small>
                    </div>

                    <div className=" col-md-6" dir='rtl'>
                        <label htmlFor="name_ar" className="form-label mb-0 ms-1">الاسم</label>
                        <input type="text" value={subCategory.name_ar} onChange={(e) => handelChange(e)}
                            className="form-control" name="name_ar" id="name_ar" placeholder="اسم الفئة" />
                        <small className="text-danger">{error.name_arError}</small>

                    </div>

                    {/* Title */}

                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label mb-0 ms-1">Title</label>
                        <input type="text" value={subCategory.details[0]} onChange={(e) => handelChange(e)}
                            className="form-control" name="title" id="title" placeholder="category title" />
                        <small className="text-danger">{error.titleError}</small>
                    </div>


                    <div className=" col-md-6" dir='rtl'>
                        <label htmlFor="title_ar" className="form-label mb-0 ">العنوان</label>
                        <input type="text" value={subCategory.details_ar[0]} onChange={(e) => handelChange(e)}
                            className="form-control" name="title_ar" id="title_ar" placeholder=" العنوان الرئيسى" />
                        <small className="text-danger">{error.title_arError}</small>

                    </div>

                    {/* Sub Title */}
                    <div className="col-md-6">
                        <label htmlFor="subTitle" className="form-label mb-0 ms-1">Sub Title
                        </label>
                        <input type="text" value={subCategory.details[1]}
                            onChange={(e) => handelChange(e)}
                            className="form-control" name="subTitle" id="subTitle" placeholder="category sub title" />
                        <small className="text-danger">{error.subTitleError}</small>
                    </div>

                    <div className="col-md-6" dir='rtl' >
                        <label htmlFor="subTitle_ar" className="form-label mb-0 ms-1">العنوان الفرعي
                        </label>
                        <input type="text" value={subCategory.details_ar[1]}
                            onChange={(e) => handelChange(e)}
                            className="form-control" name="subTitle_ar" id="subTitle_ar" placeholder="العنوان الفرعي" />
                        <small className="text-danger">{error.subTitle_arError}</small>
                    </div>

                    <div className="">
                        <label htmlFor="img" className="form-label mb-0 ms-1">Image
                        </label>
                        <input type="text" value={subCategory.img}
                            onChange={(e) => handelChange(e)}
                            className="form-control" name="img" id="img" placeholder="Image of sub category" />
                        <small className="text-danger">{error.imgError}</small>
                    </div>

                    <div className="mb-sm-5">
                        <label htmlFor="category" className="form-label">Select Category :</label>
                        <select
                            value={(subCategory.category.catname == '') ? "default" : JSON.stringify({ catid: subCategory.category.catid, catname: subCategory.category.catname, catname_ar: subCategory.category.catname_ar })}
                            defaultValue={"default"}
                            id='category' onChange={(e) => handelChange(e)}
                            className="form-select" name='category'>

                            <option value={"default"} disabled >Select...</option>
                            {categories.map(category => {
                                return <option key={category.id}
                                    value={JSON.stringify({ catid: category.id, catname: category.name, catname_ar: category.name_ar })}
                                >{category.name}-{category.name_ar}</option>
                            })}

                        </select>
                        <small className="text-danger">{error.categoryError}</small>
                    </div>

                    <div className="text-end my-5" >
                        <button type='button' className={`${(subCategory.name == '') ? "disabled" : (subCategory.name_ar == '') ? "disabled" : (subCategory.details[0] == undefined || error.titleError != '') ? "disabled" : (subCategory.details[1] == undefined || error.subTitleError != '') ? "disabled" : (subCategory.details_ar[0] == undefined || error.title_arError != '') ? "disabled" : (subCategory.details_ar[1] == undefined || error.subTitle_arError != '') ? "disabled" : (subCategory.category.catname == '') ? "disabled" : ""}
                          btn btn-primary px-4 rounded-0`}
                            onClick={handelSubmit} >{titleOfButton}</button>
                    </div>

                </form>
            </article>
        </section>

    );
}

export default AddSubCategory;
