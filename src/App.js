import React, { useState, useEffect } from 'react';
import { take } from 'lodash';



import ApiFactory from './mock';
import Editor from './Editor';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Product from './pages/single-product';
import Admin from './pages/admin';
import ShoppingCart from './pages/shopping-cart';
import Navbar from './components/navbar/navbar';
//import Product from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function App() {
  const [value, setValue ] = useState([]);
  
  
  // useEffect(()=> {
  //   getAllProducts();
  //   console.log('ciaddd',value);
  // }, []);



  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path ="/">
            <Home items={value}></Home>
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart></ShoppingCart>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/admin/products/:productId" component={Product}>
             {/*  <Product></Product> */}
          </Route>
        
          

        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );

  function getIsAdmin() {
    ApiFactory.getInstance().get('/api/is-admin')
      .then(({ data }) => {
        setValue(beautify(data));
      })
      .catch((error) => {
        //console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
       // console.log(error.response);
      });
  }

  function getAllProducts() {
    ApiFactory.getInstance().get('/api/products')
      .then(({ data }) => {
        setValue(beautify({ products: take(data, 3) }));
        //console.log(beautify({ products: take(data, 3) }));
      })
      .catch((error) => {
        console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  function getProduct(id) {
    ApiFactory.getInstance().get(`/api/products/${id}`)
      .then(({ data }) => {
        setValue(beautify({ products: data }));
      })
      .catch((error) => {
        console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  function deleteProduct(id) {
    ApiFactory.getInstance().delete(`/api/products/${id}`).then(
      () => { getAllProducts() }
    ).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function updateProduct(id, data) {
    ApiFactory.getInstance().put(`/api/products/${id}`, data).then(
      () => { getAllProducts() }
    ).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function buyItems(items) {
    ApiFactory.getInstance().post('/api/buy', { itemsToBuy: items }).then(function() {
      alert('Bought Items. This is fake API that do nothing.');
    }).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function beautify(val) {
    return JSON.stringify(val, null, 2);
  }
}




    // <div className="flexContainer">
    //   <div className="flexChild rowParent">
    //     <div className="flexChild columnParent" >
    //       <div className="buttonsPanel">
    //         <button onClick={ getIsAdmin }>Test `GET` /api/is-admin</button>
    //         <button onClick={ getAllProducts }>Test `GET` /api/products</button>
    //         <button onClick={ (_evt) => { getProduct(7) } }>
    //           Test `GET` /api/products/7 for product with id equal to 7
    //         </button>
    //         <button onClick={ (_evt) => { deleteProduct(1) } }>
    //           Test `DELETE` /api/products/1 for product with id equal to 1
    //         </button>
    //         <button onClick={ 
    //           (_evt) => { 
    //             updateProduct(2, {
    //               "id": 2,
    //               "name": "Foo bar",
    //               "description": "Foo bar foo bar foo bar",
    //               "price": 3.75,
    //               "new": false
    //             });
    //           }}>
    //             Test `PUT` /api/products/2 for product with id equal to 2
    //           </button>
    //           <button onClick={ (_evt) => { 
    //             buyItems([{
    //               "id": 2,
    //               "name": "Foo bar",
    //               "description": "Foo bar foo bar foo bar",
    //               "price": 3.75,
    //               "new": false
    //             }])
    //           } }>
    //             Test `POST` /api/buy for given items
    //           </button>
    //       </div>
    //       <div className="flexChild rowParent">
    //         <Editor value={value} />
    //       </div>
    //     </div>
    //   </div>
    // </div>






