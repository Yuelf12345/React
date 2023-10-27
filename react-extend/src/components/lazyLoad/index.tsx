import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


// import ComOne from './comOne'
// import ComTwo from './comTwo'

const ComOne = lazy(() => (import('./comOne')))
const ComTwo = lazy(() => (import('./comTwo')))

export default class lazyLoad extends Component {
  render() {
    return (
      <div>
        <h2>lazyLoad</h2>
        <BrowserRouter>
          <Link to="/ComOne">ComOne</Link>
          <Link to="/comTwo">ComTwo</Link>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/ComOne" element={<ComOne />}></Route>
              <Route path="/ComTwo" element={<ComTwo />}></Route>
            </Routes>
          </Suspense>

        </BrowserRouter>
      </div>
    )
  }
}
