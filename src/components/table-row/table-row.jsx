import React, { useState, useEffect } from 'react';
import { AddToCart, RemoveFromCart, getItemCount } from '../../services/myCart';

export default function ProductRow({ element }) {
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(getItemCount(element.item.id));
        console.log('lala');
    }, []);

    function handleItemSum(symbol) {
        if (symbol == '+') {
            AddToCart(element.item);
            setCount(count + 1);
        } else if (symbol == '-') {
            if (element.count > 1) {
                RemoveFromCart(element.item.id);
                setCount(count - 1);
            }
        }
    }

    return (
        <>  {element &&
            <tr>
                <td>
                    <h3>{element.item.name} x {element.count}</h3>
                    <span>Unit Price : {element.item.price}
                    </span>
                </td>
                <td>{element.item.price * element.count}</td>
                <td className="cart-button"><button onClick={() => handleItemSum('+')}>+</button><br></br>
                    <button onClick={() => handleItemSum('-')}>-</button>
                </td>
            </tr>
        }
        </>
    );
}

