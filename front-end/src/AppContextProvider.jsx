import React, { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const globalContext = {
    isSidebarOpen,
    setIsSidebarOpen,
  };
  return (
    <AppContext.Provider value={globalContext}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
