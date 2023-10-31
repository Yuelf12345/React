import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

import { useRoutes, Link } from 'react-router-dom';
import router from './router'

function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      App...
     < Comp1 />
     < Comp2 />
     <Link to="/home">Home</Link>
     <Link to="/about">About</Link>
     {outlet}
    </div>
  );
}

export default App;
