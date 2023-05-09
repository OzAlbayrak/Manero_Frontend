import React from 'react';


function Cart() {
  
	function getCartItemsFromLocalStorage() {
	  const cartItems = localStorage.getItem('cartItems');
	  if (cartItems) {
		return JSON.parse(cartItems);
	  }
	  return [];
	}
  
	
	const [cart, setCart] = useState(getCartItemsFromLocalStorage());
  
	function addToCart(product) {
	  const cartItems = getCartItemsFromLocalStorage();
	  cartItems.push(product);
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));
	  setCart(cartItems);
	}
  
	function removeFromCart(product) {
	  const cartItems = getCartItemsFromLocalStorage();
	  const updatedCartItems = cartItems.filter(item => item.id !== product.id);
	  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	  setCart(updatedCartItems);
	}
  
	return (
	  <div>
		<h2>Varukorg</h2>
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





{
//GetAllProduct()
//GetNumberOfProducts()
//DeleteOneProductFromList()
//ViewAllproducts(GetAllProduct())
}
