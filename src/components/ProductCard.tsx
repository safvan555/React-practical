import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../storeMain/cartSlice';

const ProductCard = ({ id, title, price, image }: any) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name: title, price, quantity: 1 }));
  };

  return (
    <div className="card shadow-sm h-100 text-center p-3 product-card">
      <img src={image} alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
