import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login"; 
import Index from './pages/Index';
import CreateEvent from './components/common/CreateEvent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Index />}/>
      
      </Route>
      <Route path="/create-event" element={<CreateEvent />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

