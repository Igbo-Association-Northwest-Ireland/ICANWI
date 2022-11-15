import { useContext } from "react";
import { useState, createContext } from "react";
const AuthContext = createContext(null);
export const AuthProvider= ({children})=>{
    const[user, setUser] = useState(null)
    const SignIn = user =>{
        setUser(user)
    }
   const logout = ()=>{
    setUser(null)
   } 
   return (<AuthContext.Provider value={{user, SignIn, logout}}>{children}</AuthContext.Provider>
   )
}
export const useAuth = () =>{
return useContext(AuthContext)
}