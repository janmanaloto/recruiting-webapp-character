import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [attributes, setAttributes] = useState({});

  const handleAttributesChange = ({ name, value }) => {
    setAttributes((attributes) => ({
      ...attributes,
      [name]: value,
    }));
  };
  return (
    <AppContext.Provider value={{ attributes, handleAttributesChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useAttributes = () => {
  const { attributes } = useAppContext();
  return attributes;
};
