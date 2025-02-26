import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Market from './components/pages/Market';
import Stash from './components/pages/Stash';
import Wallet from './components/pages/Wallet';
import Account from './components/pages/Account';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' element={ <Home /> } />
          <Route path='/callicoinsreact/market' element={ <Market /> } />
          <Route path='/wallet' element={ <Wallet /> } />
          <Route path='/stash' element={ <Stash /> } />
          <Route path='/account' element={ <Account /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
