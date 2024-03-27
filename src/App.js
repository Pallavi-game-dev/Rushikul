import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Customer from './components/Customer/Customer';
import Header from './components/Header/Header';
// import AddCustomer from './components/Customer/AddCustomer';

function App() {
  return (
    <>
    <Header/>
    <Router>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
 </>
  );
}

export default App;
