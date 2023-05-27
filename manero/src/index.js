import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { PromoCodeProvider } from './contexts/PromoCodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<PromoCodeProvider>
	<ShoppingCartProvider>
		<WishlistProvider>
			
				<App />
				<ProfileProvider>
			</ProfileProvider>
		</WishlistProvider>
	</ShoppingCartProvider>
	</PromoCodeProvider>
);
