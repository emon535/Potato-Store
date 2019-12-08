import React, { useState, useEffect } from 'react';
import {getTotalCount, AddToCart, RemoveFromCart, getCart, InTheCart, totalCount, clearCart} from '../services/myCart'
import ProductRow from '../components/table-row/table-row';
import './shopping-cart.scss';

export default function ShoppingCart() {
  const[cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCart());
    console.log(cart, 'cia gautas cart');
  },[cart]);

  
  function clearAllCart() {
      clearCart();
      setCart([]);
  }

  function purchaseItems() {
     clearAllCart();
     alert("Thanks for purchasing");
  }

  return (
    <>
    <div> Your shopping cart: 
    {
      totalCount > 0 ?  <div>
        <button onClick={()=>clearAllCart()}>Clear cart</button>
        <button onClick={()=>purchaseItems()}>Purchase</button>
        <table className="cart-table">
          <tr>
            <th>Product's name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Sum</th>
            <th>Increment</th>
            <th>Decrement</th>
          </tr>
          {cart.map((el, index) => {
            
            return <ProductRow element={el} ></ProductRow>
          })}
        </table> 
    </div>
    : <h1>Is empty</h1>
    }

</div>

    </>
  );
}
