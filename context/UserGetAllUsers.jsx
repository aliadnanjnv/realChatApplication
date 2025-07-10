import React from "react";
import {useState,useEffect} from "react";
import Cookies from "js-cookies";
import axios from "axios";
function UserGetAllUsers(){
    const [allUsers,setAllUsers]=useState();
    const [loading ,setLoading]=useState();
    useEffect(()=>{
        const getUsers = async()=>{
            setLoading(true)
            try{
                const token = Cookies.get("jwt");
                const response = await axios.get(
                    "/api/user/getUserProfile",
                    {
                        Credentials:"include",
                        headers:{
                            Authorization:`Bearer ${token}`,
                        },
                    }
                );
                   setAllUsers(response.data);
                   setLoading(false);
            }
         
            catch(error)
            {
                console.log("Error in userGetAllUsers"+error);
            }
        };
        getUsers();
    
    },[]);

    return [allUsers,loading];
}

export default UserGetAllUsers;