import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useRoutes, useLocation,useNavigate } from 'react-router-dom';
import router from './router'
import { message } from 'antd';
function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/login")
    message.warning("未登录")
  },[])
  return <div></div>
}
function ToPage() {
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/")
  },[])
  return <div></div>
}

function BeforRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()
  const token = localStorage.getItem('token')
  if (location.pathname === '/login' && token) {
    return <ToPage />
  }
  if(location.pathname != '/login' && !token){
    return <ToLogin />
  }
  return outlet
}

function App() {
  const token = localStorage.removeItem('token')
  return (
    <div className="App">
      {/* {outlet} */}
      <BeforRouterEnter />
    </div>
  );
}

export default App;
