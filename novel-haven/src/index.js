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
import Horror from "./genre-pages/Horror";
import Mystery from "./genre-pages/Mystery";
import Romance from "./genre-pages/Romance";
import Drama from "./genre-pages/Drama";
import Book1 from "./book-pages/Book1";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="contact" element={(<Contact />)} />
          <Route path="admin" element={(<Admin />)} />
          <Route path="topgenres" element={(<TopGenres />)} />
          <Route path="bestsellers" element={(<BestSellers />)} />
          <Route path="order" element={(<Order />)} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/mystery" element={<Mystery />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/book1" element={<Book1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);