import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustQuantity, removeFromCart } from '../storeMain/cartSlice';

const Cart = () => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) dispatch(adjustQuantity({ id, quantity }));
  };

  const getTotalAmount = () => items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (

    <div>
      <h2 className="mb-3">Cart</h2>  
      {/* There is no product in the cart, so this message will come there */}
      {items.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty. Add some products!
        </div>
      ) : (
        <>
        {/* this is cart table which will be add item will show here with how many Quantity , price and total */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped cart-table">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any, index: number) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                    
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      min="1"
                      className="form-control"
                    />
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td><button onClick={() => handleRemoveFromCart(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h3 className="mt-3 text-end">Total: ${getTotalAmount().toFixed(2)}</h3>
          {/* CheckOut button will not you mention in ppt it's just place holder */}
          <button className='mt-3'>
          CheckOut
        </button>
        </>
      )}
    </div>
  );
};

export default Cart;
