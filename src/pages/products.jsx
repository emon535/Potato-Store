import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/products-service';
import ProductCard from '../components/product-card/product-card';
import ProductQuantity from '../components/product-quantity/product-quantity';
import ApiFactory from '../mock';
import Editor from '../Editor';
import './products.scss';



export default function Products() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    ApiFactory.getInstance().get('/api/products')
      .then((res) => {
        setItems(res.data);
        //console.log(res.data, 'cia data');
      })
      .catch((error) => { setError(error.res) })

  }, [error]);

  return (
    <>
      <div className="item-wrapper">
        <div className="container">
          {
            items.map((item, index) => {
              return <>
                <div key={index} className="container__item">
                  <ProductCard product={item}></ProductCard>
                  <ProductQuantity item={item}></ProductQuantity>
                </div>
              </>
            })
          }
        </div>
      </div>
    </>
  );
}
