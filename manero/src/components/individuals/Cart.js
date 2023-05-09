import React, { createContext, useReducer, useEffect, useState } from 'react';



export const CartContext = createContext();

const Cart = (prod) =>
{

	function addToCart(product)
	{
	

		console.log(product);
		//console.log(JSON.stringify(product));
		
	}

	return (
		<div>
			{prod.id ? addToCart(prod) : 
				<h2>Varukorg</h2>
			}
		</div>
	);
} 

  export default Cart;

/*
export const CartContext = createContext();

const Cart = (props) =>
{
	const [product, dispatch] = useReducer(ttt, []);

	return(
		<CartContext.Provider value={{product, dispatch}}>
			{ props.children }
		</CartContext.Provider>
	)
}
  export default Cart;






const Cart = ({ prod }) =>{
//function Cart({ prod }) {
	
	//const [cart, setCart] = useState(getCartItemsFromLocalStorage());
	

	function getCartItemsFromLocalStorage() {
	  const cartItems = localStorage.getItem('cartItems');
	  if (cartItems) {
		return JSON.parse(cartItems);
	  }
	  return [];
	}
	
	
	
  
	function addToCart(product) {
	  //const cartItems = getCartItemsFromLocalStorage();
	  //cartItems.push(product);
	  //localStorage.setItem('cartItems', JSON.stringify(cartItems));
	  //setCart(cartItems);
	  localStorage.setItem('cartItems', JSON.stringify(product));
	  setCart(cartItems);
	}
    
	
	/*
	function removeFromCart(product) {
	  const cartItems = getCartItemsFromLocalStorage();
	  const updatedCartItems = cartItems.filter(item => item.id !== product.id);
	  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	  setCart(updatedCartItems);
	}


	return (
	  <div>
		<h2>Varukorg { addToCart(prod)}</h2>
		<ul>	
		  {cart.map(item => (
			<li key={item.id}>
			  {item.name} - {item.price} kr
			  <button onClick={() => removeFromCart(item)}>Ta bort</button>
			</li>
		  ))}
		</ul>
	  </div>
	);
  } 

    export default Cart;
	*/