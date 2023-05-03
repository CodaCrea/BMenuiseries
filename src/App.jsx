import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, Footer, Header, Home, NotFound, Product, Productions, Rating } from './config';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prestations' element={<Productions />} />
        <Route path='/prestations/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/avis' element={<Rating />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
