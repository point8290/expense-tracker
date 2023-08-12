import React, { createContext } from "react";
import { useReducer } from "react";
export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const initialState = {
    isSidebarOpen: false,
  };

  const updateAppContext = (state, action) => {
    if (action.type === "toggleSidebar") {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
    return state;
  };

  const [state, dispatch] = useReducer(updateAppContext, initialState);

  const globalContext = {
    appContext: state,
    updateAppContextState: dispatch,
  };
  return (
    <AppContext.Provider value={globalContext}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
