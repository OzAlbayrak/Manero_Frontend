import { createContext, useContext, useState, useEffect } from "react";
import { getAddresses } from "../utilities/api";

const AddressContext = createContext();

export const useAddressContext = () => {
  return useContext(AddressContext);
};

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState({});

  const getToken = () => {
    return sessionStorage.getItem("apiAccessToken");
  };

  const getUserAddresses = async () => {
    const token = getToken();
    try {
      const response = await getAddresses(token);
      if (response.ok) {
        const addressData = await response.json();
        setAddresses(addressData);
        console.log("addressdata:", addressData);
      } else if (response.status === 404) {
        const error = await response.text();
        console.log(error);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getUserAddresses();
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
