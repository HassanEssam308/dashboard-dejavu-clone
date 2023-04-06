import { addDoc, doc, updateDoc,collection,setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { db } from '../../config/firestore_config';
import changeCategories from '../../store/Actions/categoriesAction';
import ProductsList from '../../store/Actions/ProductsList';


const AddProduct = () => {


    const productslist = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const { id } = useParams();
    const mpcolor = new Map();
    const[color,setcolor]=useState({});
    const [product,setproduc]=useState({
        catid:'',
        subid:'',
        name:'',
        new_price:'',
        old_price:'',
        size:{},
        offer:'',
        imgs:[],
        discount:'',
        details:[],
        colors:{}
    })
    const [producterr,setproducerr]=useState({
        catiderr:'',
        subiderr:'',
    })
    useEffect(()=>{
        if(id){
       const prd=productslist.find(prd => prd.id == id);
        console.log(prd);
        setcolor(prd.colors);
        console.log(color);
        setproduc({...prd});
        }
    },[])
 
    //console.log(id);
    const handleform=(ev)=>{
     //  console.log(ev.target.value);
        setproduc({ ...product, [ev.target.name]: ev.target.value });
        switch(ev.target.name){
            case 'catid':
            setproducerr({...producterr,catiderr:((ev.target.value!='vBEYRuSj9Us4ZPPUbg13')&&(ev.target.value!='cgCpnqSfoejbeTYqAxQE'))?"Invalid ID":""})
            //console.log(producterr.catiderr);
            //console.log(ev.target.value);
          //  setproduc({...product,catid:ev.target.value});
            break;
            case'subid':
            setproducerr({...producterr,subiderr:((ev.target.value!='HNfgWKICjVLXdZnInCK6')&&(ev.target.value!='J57FdZwBd0h0PbLsxpyd')&&(ev.target.value!='Mp7jz79bKhJXW0TsHjw8')&&(ev.target.value!='NhVZroZEavmDMtOoQvdx')&&(ev.target.value!='rd6s5oYcILE2fIPKvzuM'))?"Invalid SubID":""})
              console.log(ev.target.value);
            setproduc({...product,subid:ev.target.value});
            break;
            case'name':
            setproduc({...product,name:ev.target.value});
            break;
            case'new_price':
            setproduc({...product,new_price:ev.target.value});
            break;
            case'old_price':
            setproduc({...product,old_price:ev.target.value});
            break;
            case'offer':
            setproduc({...product,offer:ev.target.value});
            break;
            case'imgs':
            setproduc({...product,imgs:[product.imgs[0], ev.target.value]});
            break;
            case'discount':
            setproduc({...product,discount:ev.target.value});
            break;
            case'details':
            setproduc({...product,details:[product.details[0],ev.target.value]});
            break;
            case'colors':
            setproduc({...product,colors:[product.colors[0],ev.target.value]});
            break;
            case'size':
            setproduc({...product,size:[product.size[0],ev.target.value]});
            break;
        }
       // console.log(product);

    }
    const upadteproduct=  ()=>{
    if(id){
        const docRef = doc(db, "product", id);
        if( window.confirm("Entire Document Will updated")){
        updateDoc(docRef,product).then(()=>{
            dispatch(ProductsList());
            console.log("Entire Document has been updated successfully.")
        }).catch((error)=>{
            console.log(error);
        })
      }
    }else{
        const docRef = collection(db, "product");
        if( window.confirm("Entire Document Will Added")){
            addDoc(docRef,product).then((docRef)=>{
                dispatch(ProductsList());
                console.log(`Entire Document has been Added successfully.${docRef}`)
            }).catch((err)=>{
                console.log(err);
            })


    }
    }}

    const [Imgg, SetImg] = useState([])
    const [Imge, SetImge] = useState('')
    const Img = (ev) => {
        console.log(ev.target.value);
        SetImge(ev.target.value);
        console.log(Imge);
    }
    const Add=()=>{
        if(Imge!=''){
           SetImg([...Imgg, Imge]);
           //console.log(Imgg);
         //product.imgs.push(Imge);
    
        }
      // console.log(product.imgs);
    }
    for(let i in product.colors){
        mpcolor.set(i,product.colors[i]);
        console.log(mpcolor);
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
                    <h3 className="col-md-9 ">  Add Product</h3>
                    <div className='col-md-3'>
                        <Link to='/products' >
                        <button type="button" className="btn btn-warning rounded-0 ps-5 pe-5">Back </button></Link>
                    </div>
                </div>
                <form>
                <div className="container-fluid" style={{width: '70%'}}>
                    <div className="form-group row">
                        <label htmlFor="catid" className="col-sm-2 col-form-label">CategoryId</label>
                        <div className="col-sm-10">
                            <input name='catid' type="text" className="form-control" id="ID" placeholder="CategoryID" onChange={(e) => handleform(e)} value={product.catid} />
                            <p className="text-danger">{producterr.catiderr}</p>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="SubCategoryId" className="col-sm-2 col-form-label" >SubCategoryId</label>
                        <div className="col-sm-10">
                            <input name='subid' type="text" className="form-control" id="SubCategoryId" placeholder="SubCategoryId"onChange={(e) => handleform(e)} value={product.subid} />
                            <p className="text-danger">{producterr.subiderr}</p>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">ProductName</label>
                        <div className="col-sm-10">
                            <input name='name' type="text" className="form-control" id="name" placeholder="ProductName" onChange={(e) => handleform(e)} value={product.name}/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="new_price" className="col-sm-2 col-form-label">New_Price</label>
                        <div className="col-sm-10">
                            <input name='new_price' type="number" className="form-control" id="new_price" placeholder="NewPrice" onChange={(e) => handleform(e)} value={product.new_price}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="old_price" className="col-sm-2 col-form-label">Old_Price</label>
                        <div className="col-sm-10">
                            <input name='old_price' type="number" className="form-control" id="old_price" placeholder="old_price" onChange={(e) => handleform(e)} value={product.old_price}/>
                        </div>
                    </div>
                    <br />

                    <div className="form-group row">
                        <label htmlFor="offer" className="col-sm-2 col-form-label">Offer</label>
                        <div className="col-sm-10">
                            <input name='offer' type="boolen" className="form-control" id="offer" placeholder="offer" onChange={(e) => handleform(e)} value={product.offer}/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="discount" className="col-sm-2 col-form-label">Discount</label>
                        <div className="col-sm-10">
                            <input name=' discount' type="text" className="form-control" id="discount" placeholder="discount" onChange={(e) => handleform(e)} value={product.discount}/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="details" className="col-sm-2 col-form-label">Details</label>
                        <div className="col-sm-10">
                            <input name='details' type="text" className="form-control" id="details" placeholder="Details" onChange={(e) => handleform(e)} value={product.details[0]}/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="imgs" className="col-sm-2 col-form-label">Imge</label>
                        <div className="col-sm-10">
                            <input name='imgs' type='text' className="form-control" id="imgs" placeholder="image" onMouseLeave={(ev) => Img(ev)} value={product.imgs[0]}/>      
                          <button type="button" style={{backgroundColor:'#d7c9a0'}} className="btn btn text-primary-emphasis mt-1 rounded-0  " onClick={Add} >AddImge</button>
                     
                        </div>
                    </div>
                    <br />
                    
                    
                    <div className="form-group row">
                        <label htmlFor="colors" className="col-sm-2 col-form-label" >Color</label>
                        <div className="col-sm-10">
                        <input name='colors' type="text" className="form-control" id="colors" placeholder="color" onChange={(e) => handleform(e)} value={product.colors.value}/>
                        <div className='text-end'>
                        <button type="button" style={{backgroundColor:'#d7c9a0'}} className="btn btn text-primary-emphasis mt-1 rounded-0 text-end " >AddColor</button>
                        </div>
                           
                        </div>
                    </div>
                   
                    <br />
                   
                    </div>
                    <div className='text-end '>
                    <button type="button" style={{backgroundColor:'#5a5955'}} className="btn btn text-primary-emphasis me-5 rounded-0" onClick={upadteproduct}>Add</button>
                    </div>

             </form>
                </div>
        
            </>
            )

}
            export default AddProduct;