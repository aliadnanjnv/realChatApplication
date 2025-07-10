import React from 'react';
import User from './User';
import userGetAllUsers from "../../context/userGetAllUsers";
function Users()
{
  //  const [allUsers,loading] = userGetAllUsers;
  //  console.log(allUsers);
     return(
        <>
          <div style={{maxHeight:"calc(83vh)"}} className="overflow-y-auto">
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                <User></User> 
                
                
          </div>
        </>
    );
}

export default Users;