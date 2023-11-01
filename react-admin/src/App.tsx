import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes, Link } from 'react-router-dom';
import router from './router'

function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
     {outlet}
    </div>
  );
}

export default App;
