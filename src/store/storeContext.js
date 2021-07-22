import { createContext, useState } from "react";
const StoreContext = createContext(undefined);

const StoreContextProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState([]);
  return (
    <StoreContext.Provider value={{ todoLists, setTodoLists }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
