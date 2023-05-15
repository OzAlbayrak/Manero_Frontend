import React, { useState, useEffect } from 'react';
import UseFetch from './UseFetch';
import ProductCard from './ProductCard';

const Cart = (prod) =>
{

	//let products = JSON.parse(localStorage.getItem("cartItems"));
	//let cart = JSON.parse(localStorage.getItem("cart"));


	function addToCart(product)
	{
		//let pr = products.find(function(pr){
		//	return pr.id === product.id;
		//});
		
		//if(cart.lenght === 0){
		//	cart.push(pr);
		//}else{
			//let res = cart.find(element => element.id === product);
			//if(res === undefined){
			//	cart.push(pr);
			//}
		//}

		//localStorage.setItem("cart", JSON.stringify(cart));

		//let products = JSON.parse(localStorage.getItem("cartItems"));
		//products.push(product);
		console.log(product);
		//console.log(JSON.stringify(product));
	  	localStorage.setItem('cartItems', JSON.stringify(product));
	}

	return (
		<div className='d-flex justify-content-center align-items-center' >
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