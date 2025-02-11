import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const HomeMain = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data.slice(0, 5)));
  }, []);

  return (
    <section className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Cart />
          </div>
          <div className='col-md-6 row'>
          <h1>Products</h1>
            {products.map((product: any) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default HomeMain;