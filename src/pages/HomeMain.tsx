import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { ProductsGet } from '../services/productService';
import _ from 'lodash';

const HomeMain = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const debouncedFetchProducts = useCallback(
    _.debounce(async (query: string) => {
      try {
        const data = await ProductsGet(query);
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products');
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetchProducts(search);
  }, [search, debouncedFetchProducts]);

  return (
    <section className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Cart />
          </div>
        <div className='col-md-6'>
        <h1>Products</h1>
        <input
        className='w-100 mb-2'
        type="text"
        placeholder="Search products "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
        <div className="row">
          {products.map((product: any) => (
            <div className="col-lg-6 col-md-12 col-sm-6 mb-4" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
          </div>
          </div>
        </div>
    </section>
  );
};

export default HomeMain;