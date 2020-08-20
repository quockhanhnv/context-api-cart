import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import TopMenu from './components/TopMenu';
import Products from './pages/Products';

import { CartProvider } from './contexts/Cart';

const Index = () =>  <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
