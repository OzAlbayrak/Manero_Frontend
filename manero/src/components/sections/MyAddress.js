import React from "react";
import Header from "./Header";
import AddressField from "../individuals/AddressField";
import { NavLink } from "react-router-dom";
import { useAddressContext } from "../../contexts/AddressContext";

const MyAddress = () => {
  const { addresses } = useAddressContext();

  const getTitleIcon = (title) => {
    switch (title.toLowerCase()) {
      case "home":
        return "fa-light fa-house";

      case "work":
        return "fa-light fa-suitcase";

      default:
        return "fa-light fa-location-dot fa-lg";
    }
  };

  return (
    <div className="container myaddress p-0">
      <div>
        <Header
          title={"My address"}
          hasSideIcon={true}
          isMenu={false}
          hasCart={false}
        ></Header>
      </div>
      <div className="media-border mx-auto d-flex">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          addresses.map((address) => (
            <div className="field-box" key={address.addressId}>
              <AddressField
                icon={<i className={getTitleIcon(address.title)}></i>}
                title={address.title}
                streetName={address.streetName}
                postalCode={address.postalCode}
                city={address.city}
                submitbutton={
                  <i
                    className="fa-light fa-pen-line fa-xs"
                    style={{ color: "black" }}
                  ></i>
                }
              />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <p>No addresses registered</p>
          </div>
        )}

        <div className="new-address-box">
          <NavLink to="/newaddress" className="sign-up-link">
            <i
              className="fa-sharp fa-light fa-plus"
              style={{ color: "black" }}
            ></i>
          </NavLink>
          <p>Add a new address</p>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
