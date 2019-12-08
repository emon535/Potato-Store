import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/products-service';
import ProductCard from '../components/product-card/product-card';
import ApiFactory from '../mock';
import Editor from '../Editor';
import { Link } from 'react-router-dom';
import './home.scss';
export default function Home({ itemss }) {

  const [items, setItems] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    ApiFactory.getInstance().get('/api/products')
      .then((res) => {
        setItems(res.data);
        // console.log(res.data, 'cia data');
      })
      .catch((error) => { setError(error.res) })

  }, [error]);




  return (
    <>
      <div className="welcome-image body">
        <div className="welcome-text">
          <h1>Potato shop</h1>
          <h3>Highly pleasant to taste</h3>
          <Link to="/products" className="welcome-button">START SHOPPING</Link>
        </div>
      </div>
      {items.map((item, index) => {
        return <div className="flex-item" key={index}>
          <img className="flex-item__image" heigth="239" width="329" src={item.images[0].url} alt="" />
          <div className="flex-item__info">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      })}


    </>
  );
}

Home.defaultProps = {
  items: []
}

