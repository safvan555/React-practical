import React, { useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { ProductsGet } from '../services/productService';
import _ from 'lodash';

const HomeMain = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  {/* here we use debounce for product search */ }

  const debouncedFetchProducts = useCallback(
    _.debounce(async (query: string) => {
      try {
        const data = await ProductsGet(query);
        setProducts(data);
      } catch (error) {
        console.error(error);
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
          {/* cart components */}
          <Cart />
        </div>
        <div className='col-md-6'>
          <h1>Products</h1>
          {/* product search */}
          <input
            className='w-100 mb-2'
            type="text"
            placeholder="Search products "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Product card component */}
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