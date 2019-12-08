import React, {useState} from 'react';
import ProductQuantity from '../product-quantity/product-quantity'
import {Gallery, GalleryImage} from 'react-gesture-gallery';
import './product-card.scss';

export default function ProductCard({product}) { 
  const [index, setIndex ]= useState(0);

  return (
    <>
      <div className="product">
          <div className="product-image">
           {/* {        
             product.images.map(img => {         
               //return <img className="mySlides" src={img.url} alt=""/>
                return <img src={product.images[0].url} alt=""/>
              })
              
           } */}

           <Gallery index={index}
            onRequestChange={i=> { setIndex(i); }}
           >
            {
              product.images.map(img => (
                <GalleryImage src={img.url}></GalleryImage>
              ))
            }
           </Gallery>
        
          </div>
        <div className="product__info">
           <h1 className="product__info-title">{product.name}</h1>
           <h2>{product.price}</h2>
           <p>{product.description}</p>
        </div>      
      </div>
    </>
  );
}
