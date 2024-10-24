import { createContext, useContext, useState } from "react";

//? 1-Create Context:
export const AuthContext = createContext();

//? 2-Create Provider:
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user-auth")) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};


//? 3-Custom Hook to Consume the context:
export const useAuthContext = ()=>{
  return useContext(AuthContext)
}
