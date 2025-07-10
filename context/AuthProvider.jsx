import {React} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {createContext} from 'react';
import Cookies from 'js-cookies';

export const AuthContext = createContext();

export const AuthProvider=({children})=>
{
    const initialUserState = Cookies.getItem("jwt")|| localStorage.getItem("messenger");

    // parse the user data and storing in state
    const [authUser,setAuthUser]=useState(initialUserState?JSON.parse(initialUserState):undefined);

    return(
        <>
          <AuthContext.Provider value={{authUser,setAuthUser}}>
           {children}
          </AuthContext.Provider>
        </>
    )
}



export const useAuth = () => useContext(AuthContext);
