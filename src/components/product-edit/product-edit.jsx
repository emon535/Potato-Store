import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ApiFactory from '../../mock';
export default function ProductEdit({ productId }) {
  // const handleSearchClick = () => {
  //     setPage("searchList");
  //     setQuery(searchbox.current.value);
  //   };
  const handleDelete = () => {
    ApiFactory.getInstance().delete(`api/products/${productId}`);
  }
  return (
    <>
      <div>
        {console.log(productId, 'cia prod id')}
        {/* <Link to={`/admin/products/${productId}`}><h3>Edit</h3></Link> */}
        <button onClick={() => handleDelete}><h3>Delete</h3></button>
      </div>
    </>
  );
}
