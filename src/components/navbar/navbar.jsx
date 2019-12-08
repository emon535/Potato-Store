import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';
import {FaHome, FaShoppingCart} from 'react-icons/fa';
import ApiFactory from '../../mock';
//import Editor from '../Editor';
import {getTotalCount} from '../../services/myCart';

export default function Navbar() {
  const [isAdmin, setIsAdmin]= useState(false);
  const [count, setCount] = useState();
  useEffect(() => {
    ApiFactory.getInstance().get('/api/is-admin')
      .then((res) => {
        setIsAdmin(res)
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    setCount(getTotalCount());
    console.log('counto useeffect');
 },[count]);
  
  return (
    <>
        <header className="navbar">
                <Link className="navbar__list-item__home-icon" to="/"><span><FaHome/></span></Link>
                <Link className="navbar__list-item" to="/products">Products</Link>
                {isAdmin && <Link className="navbar__list-item"to="/admin">Admin</Link>}
                {/* <h2>cart size--> {count}</h2> */}
                <Link className="navbar__list-item__cart-img" to="shopping-cart"><span><FaShoppingCart/></span></Link>
        
        </header>
    </>
  );
}
