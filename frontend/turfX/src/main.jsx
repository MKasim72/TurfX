import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth from './store/auth'; // import your AuthProvider
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Owner from './store/owner.jsx';

createRoot(document.getElementById('root')).render(
  <Owner>
  <Auth>
  <StrictMode>
    <App />
    <ToastContainer></ToastContainer>
  </StrictMode>
  </Auth>
  </Owner>
)
