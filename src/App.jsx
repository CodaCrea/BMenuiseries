import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, Footer, Header, Home, NotFound, Product, Productions, Rating } from './config';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/BMenuiseries' element={<Home />} />
        <Route path='/BMenuiseries/prestations' element={<Productions />} />
        <Route path='/BMenuiseries/prestations/:id' element={<Product />} />
        <Route path='/BMenuiseries/contact' element={<Contact />} />
        <Route path='/BMenuiseries/avis' element={<Rating />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
