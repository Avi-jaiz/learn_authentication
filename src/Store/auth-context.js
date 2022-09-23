import { useState } from "react";
import React  from "react";

const AuthContext =React.createContext({
    token:'',
    isLogged:false,
    login:(token)=>{},
    logout:()=>{},
})


export const AuthContextProvider = props=>{
const [token,setToken] = useState(null);

const userIsLogged = !!token;

const loginHandler=(token)=>
{
    setToken(token)
}

const logOutHandler =()=>
{
    setToken(null)
}

const value ={
    token:token,
    isLogged:userIsLogged,
    login:loginHandler,
    logout:logOutHandler,
}


    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export default AuthContext;