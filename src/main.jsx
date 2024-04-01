import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddShopping from './components/AddShopping.jsx';
import UpdateShopping from './components/UpdateShopping.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () =>fetch('http://localhost:5000/products')
  },
  {
    path:'/addShopping',
    element: <AddShopping></AddShopping>
  },
  {
    path: '/updateShopping/:id',
    element: <UpdateShopping></UpdateShopping>,
    loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
