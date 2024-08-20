import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/category/:categoryname/products",
    element: <Products />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />

  </StrictMode>,
)
