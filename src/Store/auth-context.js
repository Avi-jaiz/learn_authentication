import { useState } from "react";
import React  from "react";

const AuthContext =React.createContext({
    token:'',
    isLogged:false,
    login:(token)=>{},
    logout:()=>{},
})


export const AuthContextProvider = props=>{
    const initialToken = localStorage.getItem('token')
const [token,setToken] = useState(initialToken);



const userIsLogged = !!token;

const loginHandler=(token)=>
{
    localStorage.setItem('token',token)
    setToken(token)
}

const logOutHandler =()=>
{
    setToken(null)
    localStorage.removeItem('token')
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