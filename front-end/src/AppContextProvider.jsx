import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { getAuth } from "./utils/auth";
export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  const globalContext = {
    isSidebarOpen,
    setIsSidebarOpen,
    isUserLoggedIn,
    setIsUserLoggedIn,
    loggedInUser,
    setLoggedInUser,
  };
  useEffect(() => {
    const token = getAuth();
    if (token) {
      setIsUserLoggedIn(true);
      setLoggedInUser(token);
    } else {
      setIsUserLoggedIn(false);
      setLoggedInUser(null);
    }
  }, []);
  return (
    <AppContext.Provider value={globalContext}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
