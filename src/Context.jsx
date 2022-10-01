import React, { createContext } from "react";

const contexApi = createContext();
const Context = ({ children }) => {
  return <contexApi.Provider>{children}</contexApi.Provider>;
};

export default Context;
