import { createContext, useContext, useState } from "react"

const PromoCodeContext = createContext();

export const usePromoCodeContext = () => {
  return useContext(PromoCodeContext);
}


const initialState = {
  PromoCodes: []
}

export const PromoCodeProvider = ({children}) => {

  const [promoCode, setPromoCode] = useState(initialState.PromoCodes)

  const addPromoCode = (PromoCode) => {
    setPromoCode(PromoCode)
  }

  const removePromoCode = () => {
    setPromoCode([]);
  }

  return <PromoCodeContext.Provider value = { { promoCode, addPromoCode, removePromoCode } }>
    {children}
  </PromoCodeContext.Provider>
}