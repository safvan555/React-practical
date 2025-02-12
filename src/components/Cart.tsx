import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustQuantity } from '../storeMain/cartSlice';

const Cart = () => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) dispatch(adjustQuantity({ id, quantity }));
  };

  const getTotalAmount = () => items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="mb-3">Cart</h2>  
      
      {items.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty. Add some products!
        </div>
      ) : (
        <>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
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
                      style={{ width: '80px' }}
                    />
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="mt-3 text-end">Total: ${getTotalAmount().toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
