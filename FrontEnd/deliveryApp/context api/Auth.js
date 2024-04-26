import { useContext,createContext, useState } from "react";
export const authcontext= createContext(null);
export const authprovider= ({children})=>{
const [token,settoken]=useState();



return <authcontext.Provider value={{token}} >{children}</authcontext.Provider>
}
export const useauth=()=>{
return useContext(authcontext);
}