import React, { useState, useEffect } from 'react';
import ApiFactory from '../mock';
import {useParams} from "react-router-dom";
import './single-product.scss';

export default function Product() {
    const [product, setProduct]= useState({});
    const [oldId, setId]=useState();
    const { productId } = useParams();
    const [imgArr, setImgs] = useState([]);
    const [newImg, setNewImg] = useState('');
    const [Err, seterr] = useState('');
    let imgId = 0;
    
    useEffect(() => {
       
        ApiFactory.getInstance().get(`/api/products/${productId}`)
        .then((res) => {
            setProduct(res.data);
            for(let i = 0; i < product.images.length; i++) {
                addToImgArr(product.images[i].url);
            }
            console.log("vytkstaA")
            setId(res.data.id);
            console.log(res, 'cia data to kur is id');
        })
        .catch((error) => { seterr(error);console.log(error.res)}) 
      
    }, [Err]);

    const handleValueChange = ({target}) => {
        console.log(target.name, 'cia target name');
        console.log(target.value, 'cia target value');
        let t = {[target.name]: target.value, ...product};
        //setProduct({[target.name]: target.value, ...product});
        console.log(t);
        console.log(product,' po value changu');
    }

    function addToImgArr(url) {
        let temp = imgArr;
        imgId+=1;
        temp.push({id: imgId,url:url});
        setImgs(temp);
        console.log(imgArr, 'cia img arr');
        console.log("vytkstaA")
    }

    // function changeImgUrl(id, url) {
    //     let index = imgArr.findIndex(obj => obj.id == id)
    //     let temp = imgArr;
    //     temp[index].url = url;
    //    // setImgs(temp);
    // }   

    function addNewImg() {
        addToImgArr(newImg);
        console.log("vytkstaA")
    }
    
    function updateChanges() {

    }

    return (
    <> 
         
        <div>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id"  value={product.id}/>
        </div> 
        <div>
            <label htmlFor="name">Name</label>
            <input onChange={handleValueChange} type="text" name="name" id="" value={product.name}/>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea value={product.description}></textarea>
        </div>
        <div>
            <label htmlFor="">Price</label>
            <input type="text" name="price" id="price" value={product.price}/>
        </div>  
        <div>
            <label htmlFor="">Image Url's</label>
            {
            imgArr.map(x =>{
                 return <div><textarea  type="text" name="price" id="price" value={x.url}></textarea>
                    <button>Remove</button>
                 </div>
                
                })
            
            } 
            <br/>
            <label htmlFor="">Add new Url</label>
            <input onChange={e => {setNewImg(e.target.value)
                console.log(e.target.value)
            }} type="text" /> 
            <button onClick={()=>addNewImg()}>Add</button>

        </div> 
        {/* <button onClick={()=> handleUpdate()}>Submit</button> */}
        <button>Save</button>
    </>
  );
}
