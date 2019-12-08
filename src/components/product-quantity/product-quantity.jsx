import React, { useEffect, useState } from 'react';
import './product-quantity.scss';
import { AddToCart, RemoveFromCart, getItemCount } from '../../services/myCart';

export default function ProductQuantity({ item }) {
  const [count, setCount] = useState();
  let x = 0;
  useEffect(() => {

    setCount(getItemCount(item.id));
    console.log(count, 'cia tas count qualitcio');

  }, [count]);


  function handleCount(symbol) {
    if (symbol == '+') {
      AddToCart(item);
      setCount(count + 1);
    }
    if (symbol == '-') {

      if (count > 0) {
        setCount(count - 1);
        RemoveFromCart(item.id);
      }

    }
  }

  return (
    <>
      <div className="container">
        <div className="container__button" >
          {/* <button onClick={()=>RemoveFromCart(item.id)}>-</button>  */}
          <button onClick={() => handleCount('-')}>-</button>
        </div>
        <div className="container">
          <div className="container__count">
            {count}
          </div>
        </div>
        <div className="container__button">
          <button onClick={() => handleCount('+')} >+</button>
          {/* <button onClick={()=>AddToCart(item)} >+</button> */}
        </div>
      </div>
    </>
  );
}
