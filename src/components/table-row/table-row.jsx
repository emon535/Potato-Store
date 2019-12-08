import React, { useState, useEffect } from 'react';
import {AddToCart, RemoveFromCart, getItemCount} from '../../services/myCart';

export default function ProductRow({element}) {
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(getItemCount(element.item.id)); 
        console.log('lala');
    }, []);

    function handleItemSum(symbol) {
        if(symbol == '+') {
            AddToCart(element.item);
            setCount(count+1);
        } else if (symbol == '-') {   
            if(element.count > 1) {
                RemoveFromCart(element.item.id);
                setCount(count-1);
            }   
        }
    }

    return ( 
    <>  { element &&
        <tr>
            <td>{element.item.name}</td>
            <td>{element.item.price}</td>
            <td>{element.count}</td>
            <td>{element.item.price * element.count }</td>
            <td><button onClick={() => handleItemSum('+')}>+</button></td>
            <td><button onClick={() => handleItemSum('-')}>-</button></td>
        </tr>
        }
    </>
  );
}

