import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import { PromoCodeProvider } from "./contexts/PromoCodeContext";
import { AddressProvider } from "./contexts/AddressContext";
import { CreditCardProvider } from "./contexts/CreditCardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PromoCodeProvider>
    <ShoppingCartProvider>
      <WishlistProvider>
        <ProfileProvider>
          <AddressProvider>
            <CreditCardProvider>
              <App />
            </CreditCardProvider>
          </AddressProvider>
        </ProfileProvider>
      </WishlistProvider>
    </ShoppingCartProvider>
  </PromoCodeProvider>
);
