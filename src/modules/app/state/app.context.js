import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [attributes, setAttributes] = useState({});

  const handleChange = ({ name, value }) => {
    setAttributes((attributes) => ({
      ...attributes,
      [name]: value,
    }));
  };
  return (
    <AppContext.Provider value={{ attributes, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
