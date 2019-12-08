import React, {useEffect, useState} from 'react';
import ApiFactory from '../mock';
import Editor from '../Editor';
import ProductCard from '../components/product-card/product-card';
import ProductEdit from '../components/product-edit/product-edit';
import {Link} from 'react-router-dom';

export default function Admin() {
  const [items, setItems]= useState([]);
 
 
  useEffect(() => {
    // if(ApiFactory.getInstance().get('/api/products').then((res) =>res.status==200)){
    // getProducts();
    // console.log('aas');
    getProducts();
    
  }, []);
  
  function getProducts() {
    ApiFactory.getInstance().get('/api/products')
      .then((res) => {
        if(res.status == 200) {
          setItems(res.data);
          console.log(res, 'cia datele');
        }
      })
      .catch((error) => { console.log(error)}) 
  }

  function handleDelete (productId) {
    ApiFactory.getInstance().delete(`/api/products/${productId}`)
      .then(getProducts()
        // ()=> {
        // getProducts();
        // items.slice(items.indexOf(x=>x.id == productId),1);
        //console.log(items);
        //console.log(items.indexOf(x=>x.id == productId), 'cia indexof sito', productId );
        
      //}
      ).catch(err=>console.log(err));
  }
  
  return (
    <>
     {  
      items.map((item) => {
        return <>
          <div key={item.id}>
            <ProductCard key={item.id} product={item}></ProductCard>
            <Link to={`/admin/products/${item.id}`}><h3>Edit</h3></Link>
            <div onClick={() => handleDelete(item.id)}>Delete</div>
          </div>

          </>
      }) 
    }
    </>
  );
}
