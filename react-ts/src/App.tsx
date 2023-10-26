import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Router from './components/Router';
import Redux from './components/Redux';
import ReactRedux from './components/React-Redux'

import store from './components/React-Redux/store'
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Link to="/router">Router</Link><br />
          <Link to="/Redux">Redux</Link><br/>
          <Link to="/ReactRedux">ReactRedux</Link>
          <Routes>
            <Route path='/router/*' element={<Router />}></Route>
            <Route path='/Redux' element={<Redux />}></Route>
            <Route path='/ReactRedux' element={<ReactRedux store={store}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
