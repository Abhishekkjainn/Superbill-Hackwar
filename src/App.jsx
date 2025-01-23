import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './pages/header';
import Page1 from './pages/page1';
import Inventory from './pages/inventory';
import Bills from './pages/bills';
import AISuggestions from './pages/AISuggestions';
import AddInventory from './pages/addinventory';

function App() {
  useEffect(() => {
    const vendorEmail = 'automatevellore@gmail.com'; // Replace with your logic to get the vendor email
    localStorage.setItem('vendoremail', vendorEmail);
    console.log('Vendor email set to:', vendorEmail);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/AISuggestions" element={<AISuggestions />} />
        <Route path="/AddInventory" element={<AddInventory />} />
      </Routes>
    </Router>
  );
}

export default App;
