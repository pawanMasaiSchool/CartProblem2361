import { createContext } from "react";

export const AppContext = createContext(null);

const value = { Pawan: true };

function AppContextProvider({ children }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
