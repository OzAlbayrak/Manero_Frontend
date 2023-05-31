import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
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

  const getUserAddresses = useCallback(async () => {
    const token = getToken();
    if (token !== null) {
      try {
        const response = await getAddresses(token);
        if (response.ok) {
          const addressData = await response.json();
          setAddresses(addressData);
        } else if (response.status === 404) {
          const error = await response.text();
          console.log(error);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
  }, []);

  useEffect(() => {
    getUserAddresses();
  }, [getUserAddresses]);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        getUserAddresses,
        setAddresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
