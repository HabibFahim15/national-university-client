import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
     </ThemeProvider>
  </StrictMode>,
)
