import { createContext, useState, useEffect } from "react";
import API from "../Apis/axios";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrUser = async () => {
      try {
        const response = await API.get("/me");
        setCurrUser(response.data.user);
      } catch (error) {
        setCurrUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrUser();
  }, []);

  useEffect(() => {
    console.log("Current User:", currUser);
  }, [currUser]);

  return (
    <authContext.Provider value={{ currUser, setCurrUser, loading }}>
      {children}
    </authContext.Provider>
  );
};
