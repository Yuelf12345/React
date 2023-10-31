import {Navigate} from 'react-router-dom'
import React,{ lazy } from 'react'
import Home from "../views/Home"
// import About from '../views/About'
// const Home = lazy(() =>import('../views/Home'))
const About = lazy(() =>import('../views/About'))

const routes = [
    {
        path:'/',
        element:<Navigate to='/home'  />
    },
    {
        path:"/home",
        element:< Home />
    },
    {
        path:"/about",
        element:<React.Suspense fallback={<div>加载中...</div>} >
            <About/>
        </React.Suspense>
    }
]

export default routes