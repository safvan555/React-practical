import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../storeMain/cartSlice';

const ProductCard = ({ id, title, price, image }: any) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name: title, price, quantity: 1 }));
  };

  return (
    <div className='col-md-5 product-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
