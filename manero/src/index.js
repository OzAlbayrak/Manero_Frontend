import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { WishlistProvider } from './contexts/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<WishlistProvider>
				<App />
			</WishlistProvider>
		</ShoppingCartProvider>
	</React.StrictMode>
);
