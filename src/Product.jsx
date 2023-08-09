import React, { useState } from 'react';
// use props to get values from main.jsx..

function Product(props) {
  //use state to toggle  add and remove button
  const [isclicked, setclicked] = useState(true);

  const handleClick = () => {
    setclicked(false);
    props.addToCart();
  };

  const handleClick1 = () => {
    setclicked(true);
        props.removeFromCart();
  };

  return (
    <div className='product'>
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="hello all guys" className='img1'/>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <br />
      {isclicked ? <button onClick={handleClick}>Add Cart</button> : <button onClick={handleClick1}>Remove Cart</button>}
    </div>
  );
}

export default Product;


// function Product(props) {
//   const [count, setCount] = useState(0);
//   const [isclicked,setclicked]=useState(true);
//   const handleClick = () => {
//     setclicked(false);
//   };
//   //remove
//   const handleClick1 = () => {
//     setremoved(true);
//   };
//   return (
//     <div className='product'>
// <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="hello all guys" className='img1'/>
// <h3>{props.name}</h3>
// <h4>{props.price}</h4>
// <br />
// {isclicked? <button onClick={handleClick}>add</button>:<button onClick={handleClick1}>remove </button>}

   
//     </div>
//   )
// }

// export default Product