import { createContext, useContext, useState, useEffect } from "react";
import {
  getProfile,
  registerSocialAccount,
  getSocialProfile,
  getAddresses,
} from "../utilities/api";

const ProfileContext = createContext();

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [addresses, setAddresses] = useState({});

  const handleResponse = async (res) => {
    let obj = {};

    switch (res.provider) {
      case "google":
        {
          obj = {
            Id: res.data.sub,
            Email: res.data.email,
            Name: res.data.name,
            ImageSrc: res.data.picture,
            Provider: res.provider,
          };
        }
        break;
      case "facebook":
        {
          obj = {
            Id: res.data.id,
            Email: res.data.email,
            Name: res.data.name,
            ImageSrc: res.data.picture.data.url,
            Provider: res.provider,
          };
        }
        break;
    }

    console.log("obj id: ", obj.Id, typeof obj.Id);
    const response = await registerSocialAccount(obj);
    if (response.ok) {
      const data = await response.json();
      const apiToken = await data.token;
      sessionStorage.setItem("profile", JSON.stringify(res.data));
      sessionStorage.setItem("provider", res.provider);
      sessionStorage.setItem("apiAccessToken", apiToken);
      console.log(res);
    }
  };

  const getSocialData = async (provider) => {
    let token = "";

    switch (provider) {
      case "google":
        token = sessionStorage.getItem("apiAccessToken");
        break;
      case "facebook":
        token = sessionStorage.getItem("apiAccessToken");
        break;
    }
    const response = await getSocialProfile(token);

    console.log("token:", token);
    if (response.ok) {
      const profileData = await response.json();
      setProfile(profileData);
      console.log("profile:", profileData);
    } else {
      console.log("error!");
    }
  };

  const getData = async () => {
    let token = sessionStorage.getItem("apiAccessToken");

    console.log(token);
    const response = await getProfile(token);

    if (response.ok) {
      const profileData = await response.json();
      setProfile(profileData);
      console.log("profile:", profileData);
    } else {
      console.log("error!");
    }
  };

  const getUserAddresses = async () => {
    let token = sessionStorage.getItem("apiAccessToken");
    const response = await getAddresses(token);

    if (response.ok) {
      const addressData = await response.json();
      setAddresses(addressData);
      console.log("addressdata:", addressData);
    } else {
      console.log("error!");
    }
  };

  const getProvider = () => {
    if (
      sessionStorage.getItem("provider") === "facebook" ||
      sessionStorage.getItem("provider") === "google"
    ) {
      console.log("using socialmedia provider");
      setProfile(JSON.parse(sessionStorage.getItem("profile")));
      getSocialData(sessionStorage.getItem("provider"));
    } else if (sessionStorage.getItem("provider") === "local") {
      console.log("using local provider");
      getData();
    } else {
      console.log("not logged in");
    }
  };

  useEffect(() => {
    getProvider();
  }, []);

  useEffect(() => {
    if (profile && Object.keys(profile).length !== 0) {
      getUserAddresses();
    }
  }, [profile]);

  return (
    <ProfileContext.Provider
      value={{
        handleResponse,
        getProvider,
        profile,
        addresses,
      }}
    >
      {addresses && Object.keys(addresses).length !== 0 ? (
        children
      ) : (
        <div>Loading...</div>
      )}
    </ProfileContext.Provider>
  );
};
