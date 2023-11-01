import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
import Home from "../views/Home"
import NoPage from "../views/404"
import Login from "../views/Login"
const Option1 = lazy(() => import('../views/Option1'))
const Option2 = lazy(() => import('../views/Option2'))
const Option31 = lazy(() => import('../views/Option31'))

const withLoadingCompnent = (comp: JSX.Element) => {
   return <React.Suspense fallback={<div>加载中...</div>} >
        {comp}
    </React.Suspense>
}

const routes = [
    {
        path: '/',
        element: <Navigate to='/option1' />
    },
    {
        path: '/',
        element: < Home />,
        children: [
            {
                path: "/option1",
                element: withLoadingCompnent(<Option1 />)
            },
            {
                path: "/option2",
                element: withLoadingCompnent(<Option2 />)
            },
            {
                path: "/option31",
                element: withLoadingCompnent(<Option31 />)
            }
        ]
    },
    {
        path:'/login',
        element: < Login />
    },
    {
        path:'*',
        element: < NoPage />
    }
]

export default routes