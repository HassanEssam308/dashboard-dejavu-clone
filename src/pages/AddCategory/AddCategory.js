
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams ,useNavigate } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';

const AddCategory = () => {

    const [titleOfPage, setTitleOfPage] = useState('Add Category');
    const [titleOfButton, setTitleOfButton] = useState('Add ');
    const dispatch = useDispatch()
    const navigate= useNavigate()


    const [category, setCategory] = useState({
        name: '',
        details: [],
    });

    const [error, setError] = useState({
        nameError: '',
        titleError: '',
    });

    const { id } = useParams();
    const categories = useSelector((state) => state.categories.categories)

    useEffect(() => {
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
            case 'title':
                setError({ ...error, titleError: (evt.target.value.length > 0) ? "" : "Title of Category is Required ", });
                setCategory({ ...category, details: [evt.target.value, category.details[1]] });

                break;
            case 'subTitle':
                setCategory({ ...category, details: [category.details[0], evt.target.value] });
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
                    details: ['', ''],
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
                    details: ['', ''],
                })
                // console.log(category);
                navigate('/categories')

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
                        <button type="button" className="btn btn-secondary px-4 rounded-0" onClick={goBack}  >Cancel</button>
                    </div>
                {/* </Link> */}

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label mb-0 ms-1">Name</label>
                        <input type="text" value={category.name} onChange={(e) => handelChange(e)}
                            className="form-control" name="name" id="name" placeholder="category name" />
                        <small className="text-danger">{error.nameError}</small>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label mb-0 ms-1">Title</label>
                        <input type="text" value={category.details[0]} onChange={(e) => handelChange(e)}
                            className="form-control" name="title" id="title" placeholder="category title" />
                        <small className="text-danger">{error.titleError}</small>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="subTitle" className="form-label mb-0 ms-1">Sub Title </label>
                        <input type="text" value={category.details[1]} onChange={(e) => handelChange(e)}
                            className="form-control" name="subTitle" id="subTitle" placeholder="category sub title" />
                    </div>
                    <div className="text-end " >
                        <button type='button' className={`${(category.name == '' || category.details[0] == '') ? "disabled" : ""} btn btn-primary px-4 rounded-0`}
                            onClick={handelSubmit} >{titleOfButton}</button>

                    </div>
                </form>
            </article>
        </section>
    );
}

export default AddCategory;
