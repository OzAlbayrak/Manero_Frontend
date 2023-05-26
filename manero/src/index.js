import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ProfileProvider } from './contexts/ProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ShoppingCartProvider>
		<WishlistProvider>
			<ProfileProvider>
				<App />
			</ProfileProvider>
		</WishlistProvider>
	</ShoppingCartProvider>
);
