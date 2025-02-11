import axios from 'axios';

export const fetchProducts = async (limit: number = 5) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('response',response);
    return response.data.slice(0, limit); 
  } catch (error) {
    throw error;
  }
};