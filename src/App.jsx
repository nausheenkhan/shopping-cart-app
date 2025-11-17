import React, { lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Cart = lazy(() => import("./pages/Cart"));

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="font-bold">Shopping Cart</h1>
          <nav className="space-x-4">
            <Link to="/shopping-cart-app/">Home</Link>
            <Link to="/shopping-cart-app/cart">Cart</Link>
          </nav>
        </div>


        <Suspense fallback={<p className="p-6">Loading page...</p>}>
          <Routes>
            <Route path="/shopping-cart-app/" element={<Home />} />
            <Route path="/shopping-cart-app/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
