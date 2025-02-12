import axios from 'axios';

export const ProductsGet = async (searchTerm: string = '', limit: number = 5) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    let data = response.data.slice(0, limit);
      console.log('data',data);
    if (searchTerm) {
      data = data.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return data;
  } catch (error) {
   
    throw error;
  }
};