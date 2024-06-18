import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './routes/Product.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import EditForm from './routes/EditForm.jsx'
import Neymar from './routes/Neymar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
    {
       path: '/',
      element: <Home/>
    },
    {
      path: '/Products',
      element: <Product/>
    },
    {
      path: '/Products/:id', // rota dinâmica
      element: <EditForm/>
    },
    {
      path: '/Products/:id/info', // rota dinâmica
      element: <EditForm/>
    },
    {
      path: '/neymar',
      element: <Neymar/>
    },
    ]
  }
 
    
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
