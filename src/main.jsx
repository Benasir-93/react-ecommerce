import React , { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import Product from './Product.jsx'
import './Product.css'
import Footer from './Footer.jsx'
function Main() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    setCartCount(cartCount - 1);
  };
  return (
  <React.StrictMode>
    <App cartCount={cartCount}></App>
    <div className='container'>
    <Product name="Fancy Product" price="$40.00 - $80.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Special Item" price="$20.00 -$18.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Sale Item" price="$25.00"  addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Popular Item" price="$40.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Sale Item" price="$40.00 - $80.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Special Item" price="$$120.00 - $280.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Popular Item" price=" $80.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
    <Product name="Fancy Product" price="$140.00" addToCart={addToCart} removeFromCart={removeFromCart}></Product>
</div>
<br />
<Footer></Footer>
  </React.StrictMode>
)
}
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<Main />);
