import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Rotas } from './rotas.tsx';
import { StrictMode } from 'react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>
);
