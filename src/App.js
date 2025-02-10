import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Customer from './components/Customer/Customer';
import Header from './components/Header/Header';
import TermDeposit from './components/Deposits/TermDeposit/Term-deposit';
import ChairmanMessage from './components/About_Us/Chairman_message/chairman_message';
// import AddCustomer from './components/Customer/AddCustomer';
const InfoJson =require('./Jsons/term-deposit.json')
function App() {
  return (
    <>
    <Header/>
    <Router>
    <div className='background-page-color mainPage'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/term-deposit" element={<TermDeposit data={InfoJson} />} />
        <Route path="/chairman-message" element={<ChairmanMessage/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
 </>
  );
}

export default App;
