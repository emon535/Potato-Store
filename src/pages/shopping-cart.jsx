import React, { useState, useEffect } from 'react';
import { getTotalCount, AddToCart, RemoveFromCart, getCart, InTheCart, totalCount, clearCart } from '../services/myCart'
import ProductRow from '../components/table-row/table-row';
import './shopping-cart.scss';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCart());
    console.log(cart, 'cia gautas cart');
  }, [cart]);


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
      <div>
        {
          totalCount > 0 ? <div>

            <table className="cart-table">
              <tr>
                <th>Product's Information</th>
                <th>Price</th>
                <th>Update Item</th>
              </tr>
              {cart.map((el, index) => {

                return <ProductRow element={el} ></ProductRow>
              })}
            </table>
            <div className="checkout-button">
              <button id="clear-button" onClick={() => clearAllCart()}>Clear cart</button>
              <button id="purchase-button" onClick={() => purchaseItems()}>Purchase</button>
            </div>
          </div>
            : <div className="empty-message">Your shopping cart is empty</div>
        }

      </div>


    </>
  );
}
