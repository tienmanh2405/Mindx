import React from 'react';

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>Name Product: {product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Sold: {product.sold}</p>
          
          <p>Colors: {product.colors.join(', ')}</p>
          <p>Number of Reviews: {product.numReviews}</p>
          <p>Total Rating: {product.totalRating}</p>
          {product.ratings.length > 0 && (
            <div>
              <p>Ratings:</p>
              <ul>
                {product.ratings.map((rating, index) => (
                  <li key={index}>{rating}</li>
                ))}
              </ul>
            </div>
          )}
          <p>Created At: {product.createdAt}</p>
          <p>Updated At: {product.updatedAt}</p>
          <img src={product.images[0]} alt={product.name} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
