import type { RouteObject } from "react-router-dom"
import { lazy } from 'react';

const Discover = lazy(() => import('@/views/discover'));
const Home = lazy(() => import('@/views/home'));
const NotFound = lazy(() => import('@/views/notFound'));

import Layout from "@/layout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/descover",
                element: <Discover />
            }
        ]
    }, {
        path: "*",
        element: <NotFound />
    }
]

export default routes