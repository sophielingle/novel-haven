import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import TopGenres from "./pages/TopGenres";
import BestSellers from "./pages/BestSellers";
import Order from "./pages/Order";



const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="contact" element={(<Contact />)} />
          <Route path="admin" element={(<Admin />)} />
          <Route path="topgenres" element={(<TopGenres />)} />
          <Route path="bestsellers" element={(<BestSellers />)} />
          <Route path="order" element={(<Order />)} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);