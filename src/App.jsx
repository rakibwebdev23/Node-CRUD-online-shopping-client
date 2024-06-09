
import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import ShowProduct from './components/ShowProduct';
import { useState } from 'react';

function App() {

  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  console.log(products);

  return (
    <div>
      <h1 className='text-4xl font-bold text-gray-600 text-center'>Online Shop Server Client: {products.length}</h1>
      <div>
        <NavLink to="/addShopping">Add Shopping</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/users">users</NavLink>
      </div>
      <div className='grid grid-cols-2 bg-sky-100 gap-4 mt-6'>
        {
          products.map(product => <ShowProduct
          key={product._id}
          product={product}
          products = {products}
          setProducts={setProducts}
          ></ShowProduct>)
        }
      </div>
    </div>
  )
}

export default App
