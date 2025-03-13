import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routes from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <ToastContainer/>
      <RouterProvider router={routes} />
    {/* </AuthProvider> */}
  </StrictMode>,
)
