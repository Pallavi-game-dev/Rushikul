import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Customer from './components/Customer/Customer';
import Header from './components/Header/Header';
import TermDeposit from './components/Deposits/Term-deposit';
import Branch from './components/Branch/Branch';
// import Chairmanmessage from './components/About_Us/Chairman_message/chairman_message';
// import AddCustomer from './components/Customer/AddCustomer';

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
        <Route path="/term-deposit" element={<TermDeposit />} />
        <Route path="/branches" element={<Branch />} />
        {/* <Route path="/chairman-message" element={<Chairmanmessage/>} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
 </>
  );
}

export default App;
