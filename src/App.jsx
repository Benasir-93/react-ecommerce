import './App.css'

function App({ cartCount }) {
    return (
    <>
    {/* navbar info */}
  <nav class="navbar">
    <div class="logo">
      <h4>sitelogo</h4>
    </div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="dropdown">
        <a href="#">Products</a>
        <ul class="dropdown-menu">
          <li><a href="#">Product</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Product</a></li>
        </ul>
      </li>
    </ul>
    <div class="cart">
       <button>Cart ({cartCount})</button> 
        </div>
  </nav>
  {/* first show part */}
<div className='titlebox'>
  <h1 className='title'>Shop in style</h1>
  <p>With this shop hompeage template</p>
</div>
    </>
  )
}

export default App
