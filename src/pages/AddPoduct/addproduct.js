import { addDoc, doc, updateDoc, collection, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';
import ProductsList from '../../store/Actions/ProductsList';


const AddProduct = () => {


    const productslist = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const { id } = useParams();
    const mpcolor = new Array();
    const mpcolor_ar = new Array();
    const mpsize = new Array();
    const imgs = new Array();
    const [imglist, setimglist] = useState([{ servises: "" }]);
    const [detaillist, setdetaillist] = useState([{ servises: "" }]);
    const [detaillist_ar, setdetaillist_ar] = useState([{ servises: "" }]);
    const [color, setcolor] = useState([{ servises: "" }]);
    const [colorname, setcolorname] = useState({});
    const [colorqunt, setcolorqun] = useState({});
    const [color_ar, setcolor_ar] = useState([{ servises: "" }]);
    const [colorname_ar, setcolorname_ar] = useState({});
    const [colorqunt_ar, setcolorqun_ar] = useState({});
    const [sizee, setsizee] = useState([{ servises: "" }]);
    const [sizename, setsizename] = useState({});
    const [sizequnt, setsizequnt] = useState({});
    const [title, settitle] = useState('Add More');
    const [title1, settitle1] = useState('Add');
    const navigate = useNavigate()

    const [product, setproduc] = useState({
        catid: '',
        subid: '',
        name: '',
        name_ar: '',
        new_price: '',
        old_price: '',
        size: {},
        offer: '',
        imgs: new Array(),
        discount: '',
        details: new Array(),
        details_ar: new Array(),
        colors: {},
        colors_ar: {}
    })
    const [producterr, setproducerr] = useState({
        catiderr: '',
        subiderr: '',
    })
    useEffect(() => {
        console.log("ADD product");
        console.log(id + 'ids');
        if (id) {
            settitle('Show More')
            settitle1('Update')
            const prd = productslist.find(prd => prd.id == id);
            console.log(prd);
            setproduc({ ...prd });
            for (var i in prd.colors) {
                mpcolor.push(i);


            }

            console.log(mpcolor);

        }
    }, [])

    //console.log(id);
    const handleform = (ev) => {
        //  console.log(ev.target.value);
        /* setproduc({ ...product, [ev.target.name]: ev.target.value }); */
        switch (ev.target.name) {
            case 'catid':
                setproducerr({ ...producterr, catiderr: ((ev.target.value != 'vBEYRuSj9Us4ZPPUbg13') && (ev.target.value != 'cgCpnqSfoejbeTYqAxQE')) ? "Invalid ID" : "" })
                //console.log(producterr.catiderr);

                setproduc({ ...product, catid: ev.target.value });
                break;
            case 'subid':
                setproducerr({ ...producterr, subiderr: ((ev.target.value != 'HNfgWKICjVLXdZnInCK6') && (ev.target.value != 'J57FdZwBd0h0PbLsxpyd') && (ev.target.value != 'Mp7jz79bKhJXW0TsHjw8') && (ev.target.value != 'NhVZroZEavmDMtOoQvdx') && (ev.target.value != 'rd6s5oYcILE2fIPKvzuM')) ? "Invalid SubID" : "" })
                console.log(ev.target.value);
                setproduc({ ...product, subid: ev.target.value });
                break;
            case 'name':
                setproduc({ ...product, name: ev.target.value });
                break;
            case 'name_ar':
                setproduc({ ...product, name_ar: ev.target.value });
                break;
            case 'new_price':
                setproduc({ ...product, new_price: Number(ev.target.value) });
                break;
            case 'old_price':
                setproduc({ ...product, old_price: Number(ev.target.value) });
                break;
            case 'offer':
                setproduc({ ...product, offer: ev.target.checked });
                console.log(ev);
                console.log(ev.target.checked);
                break;
            case 'imgs':
                //  setproduc({ ...product, imgs: ([...imgs,ev.target.value] )});
                console.log(ev.target.value);
                break;
            case 'discount':
                setproduc({ ...product, discount: Number(ev.target.value) });
                break;
            case 'details':
                //  setproduc({ ...product, details: [ev.target.value] });
                console.log(ev.target.value);
                break;
            case 'size':
                setproduc({ ...product, size: [ev.target.value] });
                break;


        }
        // console.log(product);

    }
    const upadteproduct = () => {
        if (id) {
            const docRef = doc(db, "product", id);
            if (window.confirm("Entire Document Will updated")) {
                updateDoc(docRef, product).then(() => {
                    //  dispatch(ProductsList());
                    console.log(product);
                    console.log("Entire Document has been updated successfully.")
                }).catch((error) => {
                    console.log(error);
                })
            }
        } else {
            if (window.confirm("Entire docuemt will added")) {
                const docRef = collection(db, "product");
                addDoc(docRef, product).then((docRef) => {
                    console.log(`Entire Document .${docRef}`)
                }).catch((err) => {
                    console.log(err);
                })
                setproduc({
                    catid: '',
                    subid: '',
                    name: '',
                    name_ar: '',
                    new_price: '',
                    old_price: '',
                    size: {},
                    offer: '',
                    imgs: new Array(),
                    discount: '',
                    details: new Array(),
                    details_ar: new Array(),
                    colors: {},
                    colors_ar: {}
                })

            }

        }
        navigate('/products');



    }


    const [Imgg, SetImg] = useState([])
    const [Imge, SetImge] = useState('')
    const Img = (ev) => {

        console.log(ev.target.value);
        SetImge(ev.target.value);
        console.log(Imge);
    }
    const Add = () => {
        const inp = [...imglist, []];
        setimglist(inp);
        if (Imge != '') {
            product.imgs.push(Imge);
        }
        if (Imge != '') {

            SetImg([...Imgg, Imge]);
            console.log(Imgg);

            //console.log(Imgg);
            // product.imgs.push(Imge);

        }
        console.log(product.imgs);
    }

    const [Detail, Setdetail] = useState('')
    const detaill = (ev) => {

        console.log(ev.target.value);
        Setdetail(ev.target.value);
        console.log(Detail);
    }
    const Adddetail = () => {
        const inp1 = [...detaillist, []];
        setdetaillist(inp1);
        product.details.push(Detail);
        if (Detail != '') {

        }

        console.log(product.details);
    }
    const [Detail_ar, Setdetail_ar] = useState('')
    const detaill_ar = (ev) => {

        console.log(ev.target.value);
        Setdetail_ar(ev.target.value);
        console.log(Detail);
    }
    const Adddetail_ar = () => {
        const inp2 = [...detaillist_ar, []];
        setdetaillist_ar(inp2);
        product.details_ar.push(Detail_ar);
        if (Detail_ar != '') {

        }

        console.log(product.details_ar);
    }

    const colornam = (ev) => {
        console.log(ev.target.value);
        setcolorname(ev.target.value);
    }
    const colorquntity = (ev) => {
        console.log(ev.target.value);
        setcolorqun(ev.target.value);
    }
    const Addcolor = () => {
        const inp1 = [...color, []];
        setcolor(inp1);
        if (colorname != '' && colorqunt != '') {
            product.colors[colorname.toUpperCase()] = Number(colorqunt);
        }
    }
    const colornam_ar = (ev) => {
        console.log(ev.target.value);
        setcolorname_ar(ev.target.value);
    }
    const colorquntity_ar = (ev) => {
        console.log(ev.target.value);
        setcolorqun_ar(ev.target.value);
    }
    const Addcolor_ar = () => {
        const inp2 = [...color_ar, []];
        setcolor_ar(inp2);
        if (colorname_ar != '' && colorqunt_ar != '') {

            product.colors_ar[colorname_ar.toUpperCase()] = Number(colorqunt_ar);


        }
    }
    const sizernam = (ev) => {
        console.log(ev.target.value);
        setsizename(ev.target.value);
    }
    const sizequntity = (ev) => {
        console.log(ev.target.value);
        setsizequnt(ev.target.value);
    }
    const Addsize = () => {
        const inp1 = [...sizee, []];
        setsizee(inp1);
        if (sizename != '' && sizequnt != '') {
            product.size[sizename.toUpperCase()] = Number(sizequnt);


        }
    }





    return (
        <>
            <div className='container-fluid'>
                <span className="productnav m-md-4">
                    <Link to='Dashoard' className="nav-link text-primary-emphasis d-inline" >Dashoard </Link>
                    <Link to='/Products' className="nav-link text-primary-emphasis d-inline"> /Products</Link>
                    <span className="nav-link text-primary-emphasis d-inline">  /Edit</span>
                </span>
                <div className="row m-sm-4">
                    <h3 className="col-md-9 "> {title1} product</h3>
                    <div className='col-md-3'>
                        <Link to='/products' >
                            <button type="button" className="btn btn-warning rounded-0 ps-5 pe-5">Back </button></Link>
                    </div>
                </div>
                <form>



                    <div className="container-fluid" style={{ width: '70%' }}>

                        <div className="form-group row mb-3">
                            <label htmlFor="catid" className="form-label">Select Category</label>
                            <select className="form-control" name="catid" id="catid" onChange={(e) => handleform(e)}  >
                                <option name='catid' value={'cgCpnqSfoejbeTYqAxQE'}   >Shoes</option>
                                <option name='catid' value={'vBEYRuSj9Us4ZPPUbg13'}   >Bags</option>
                            </select>
                        </div>

                        <br />

                        <div className="form-group row mb-3">
                            <label htmlFor="subid" className="col-sm-3 col-form-label ">Select SubCategory</label>
                            <select className="form-control" name="subid" id="subid" onChange={(e) => handleform(e)}  >
                                <option name='subid' value={'rd6s5oYcILE2fIPKvzuM'}   >Ankle Boots</option>
                                <option name='subid' value={'NhVZroZEavmDMtOoQvdx'}   >High Boots</option>
                                <option name='subid' value={'J57FdZwBd0h0PbLsxpyd'}   >Half Boots</option>

                                <option name='subid' value={'HNfgWKICjVLXdZnInCK6'}   >Handbags</option>
                                <option name='subid' value={'Mp7jz79bKhJXW0TsHjw8'}   >Shoulder Bags</option>



                            </select>
                        </div>
                        {/*  <div className="form-group row">
                            <label htmlFor="SubCategoryId" className="col-sm-2 col-form-label" >SubCategoryId</label>
                            <div className="col-sm-10">
                                <input name='subid' type="text" className="form-control" id="SubCategoryId" placeholder="SubCategoryId"
                                    onChange={(e) => handleform(e)} value={product.subid} />
                                <p className="text-danger">{producterr.subiderr}</p>
                            </div>
                        </div> */}
                        <br />
                        <div className="form-group coulmn">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Product Name</label>
                            <div className="col-sm-10">
                                <input name='name' type="text" className="form-control" id="name" placeholder="ProductName"
                                    onChange={(e) => handleform(e)} value={product.name} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group coulmn">
                            <label htmlFor="name_ar" className="col-sm-2 col-form-label">Product_Name_Arabic</label>
                            <div className="col-sm-10">
                                <input name='name_ar' type="text" className="form-control" id="name_ar" placeholder="ProductNameArabic"
                                    onChange={(e) => handleform(e)} value={product.name_ar} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group coulmn">
                            <label htmlFor="new_price" className="col-sm-2 col-form-label">New_Price</label>
                            <div className="col-sm-10">
                                <input name='new_price' type="text" className="form-control" id="new_price" placeholder="NewPrice"
                                    onChange={(e) => handleform(e)} value={product.new_price} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group coulmn">
                            <label htmlFor="old_price" className="col-sm-2 col-form-label">Old_Price</label>
                            <div className="col-sm-10">
                                <input name='old_price' type="text" className="form-control" id="old_price" placeholder="old_price"
                                    onChange={(e) => handleform(e)} value={product.old_price} />
                            </div>
                        </div>
                        <br />

                        <div className="form-group coulmn">
                            <label htmlFor="discount" className="col-sm-2 col-form-label">Dicount</label>
                            <div className="col-sm-10">
                                <input name='discount' type="text" className="form-control" id="discount" placeholder="discount"
                                    onChange={(e) => handleform(e)} value={product.discount} />
                            </div>
                        </div>
                        <br />

                        {detaillist.map((singldetal, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="details" className="col-sm-2 col-form-label">details No {index + 1}</label>
                                    <div className="col-sm-10">
                                        <input name='details' type='text' className="form-control" id="details" placeholder="details" onMouseLeave={(ev) => (detaill(ev))} value={product.details[index]} />
                                        {/* <input name='imgs' type='text' className="form-control" id="imgs" placeholder="image"
                                        onChange={(e) => handleform(e)}
                                        value={product.imgs[0]} /> */}

                                        {detaillist.length - 1 === index && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Adddetail} >{title}</button>}


                                    </div>
                                </div>
                            );



                        })}

                        <br />
                        {detaillist_ar.map((singldetal, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="details_ar" className="col-sm-2 col-form-label">details_ar No {index + 1}</label>
                                    <div className="col-sm-10">
                                        <input name='details_ar' type='text' className="form-control" id="details_ar" placeholder="details_ar" onMouseLeave={(ev) => (detaill_ar(ev))} value={product.details_ar[index]} />
                                        {/* <input name='imgs' type='text' className="form-control" id="imgs" placeholder="image"
                                        onChange={(e) => handleform(e)}
                                        value={product.imgs[0]} /> */}

                                        {detaillist_ar.length - 1 === index && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Adddetail_ar} >{title}</button>}


                                    </div>
                                </div>
                            );



                        })}

                        <br />

                        {imglist.map((singleimg, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="imgs" className="col-sm-2 col-form-label">Imge No {index + 1}</label>
                                    <div className="col-sm-10">
                                        <input name='imgs' type='text' className="form-control" id="imgs" placeholder="image" onMouseLeave={(ev) => (Img(ev))} value={product.imgs[index]} />
                                        {/* <input name='imgs' type='text' className="form-control" id="imgs" placeholder="image"
                                        onChange={(e) => handleform(e)}
                                        value={product.imgs[0]} /> */}

                                        {imglist.length - 1 === index && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Add} >{title}</button>}


                                    </div>
                                </div>
                            );



                        })}

                        <br />

                        {(id) ? Object.keys(product.colors).map((key, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="colors" className="col-sm-2 col-form-label">color No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='colors' type='text' className="form-control" id="colorsname" placeholder="colorsname" onMouseLeave={(ev) => (colornam(ev))} value={key} />

                                        <br></br>
                                        <input name='colorsqun' type='text' className="form-control" id="colorsqun" placeholder="colorsquntity" onMouseLeave={(ev) => (colorquntity(ev))} value={product.colors[key]} />


                                    </div>
                                </div>
                            );

                        }) : color.map((key, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="colors" className="col-sm-2 col-form-label">color No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='colors' type='text' className="form-control" id="colorsname" placeholder="colorsname" onMouseLeave={(ev) => (colornam(ev))} value={product.colors[key]} />

                                        <br></br>
                                        <input name='colorsqun' type='text' className="form-control" id="colorsqun" placeholder="colorsquntity" onMouseLeave={(ev) => (colorquntity(ev))} value={product.colors[key]} />

                                        {(color.length - 1 === index) && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Addcolor} >{title}</button>}

                                    </div>
                                </div>
                            );

                        })}
                        <br />


                        {/* 
                        {(id)? Object.keys(product.colors_ar).map((key, index) => {

                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="colors_ar" className="col-sm-2 col-form-label">color_ar No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='colors_ar' type='text' className="form-control" id="colorsname_ar" placeholder="colorsname_ar" onMouseLeave={(ev) => (colornam_ar(ev))} value={key} />
                                        <br></br>
                                        <input name='colorsqun_ar' type='text' className="form-control" id="colorsqun_ar" placeholder="colorsquntity_ar" onMouseLeave={(ev) => (colorquntity_ar(ev))} value={product.colors_ar[key]} />

                                    </div>
                                </div>
                            );
                        }): color_ar.map((key, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="colors" className="col-sm-2 col-form-label">color_ar No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='colors' type='text' className="form-control" id="colorsname" placeholder="colorsname" onMouseLeave={(ev) => (colornam(ev))} value={product.colors[key]} />

                                        <br></br>
                                        <input name='colorsqun' type='text' className="form-control" id="colorsqun" placeholder="colorsquntity" onMouseLeave={(ev) => (colorquntity(ev))} value={product.colors[key]} />

                                        {(color_ar.length - 1 === index) && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Addcolor} >{title}</button>}

                                    </div>
                                </div>
                            );

                        })}
                        <br /> */}

                        {(id) ? Object.keys(product.size).map((key, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="size" className="col-sm-2 col-form-label">size No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='size' type='text' className="form-control" id="colorsname" placeholder="sizename" onMouseLeave={(ev) => (sizernam(ev))} value={key} />
                                        <br></br>
                                        <input name='size' type='text' className="form-control" id="sizequn" placeholder="sizequntity" onMouseLeave={(ev) => (sizequntity(ev))} value={product.size[key]} />




                                    </div>
                                </div>
                            );
                        }) : sizee.map((key, index) => {
                            return (
                                <div key={index} className="form-group coulmn">
                                    <label htmlFor="size" className="col-sm-2 col-form-label">size No {index + 1}</label>
                                    <div className="col-sm-4">
                                        <input name='size' type='text' className="form-control" id="colorsname" placeholder="sizename" onMouseLeave={(ev) => (sizernam(ev))} />
                                        <br></br>
                                        <input name='size' type='text' className="form-control" id="sizequn" placeholder="sizequntity" onMouseLeave={(ev) => (sizequntity(ev))} value={product.size[key]} />


                                        {sizee.length - 1 === index && <button type="button" style={{ backgroundColor: '#d7c9a0' }} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Addsize} >{title}</button>}


                                    </div>
                                </div>
                            );
                        })}
                        <br />
                        <div className="form-group form-check">
                            <label className="form-check-label" htmlFor="offer">Offer</label>
                            <input name='offer' type="checkbox" className="form-check-input" id="offer"
                                onChange={(e) => handleform(e)} value={product.offer} />
                        </div>


                    </div>
                    <div className='text-end '>
                        <button type="button" className="btn btn-warning rounded-0 ps-5 pe-5" onClick={upadteproduct}>{title1}</button>
                    </div>

                </form>
            </div>

        </>
    )

}
export default AddProduct;