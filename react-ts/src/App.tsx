import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/about';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Link to="/">首页</Link><br />
          <Link to="/about">关于</Link>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
