import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Header = React.lazy(() => import('header/Module'));
const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/header">Header</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ecommerce-shell" />} />
        <Route path="/header" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
