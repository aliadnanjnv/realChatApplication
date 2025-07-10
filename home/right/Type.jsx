import React from 'react';
import { BiSend } from "react-icons/bi";
function Type()
{
    return(
        <>
           <div className="flex items-center space-x-3 h-[8vh] bg-gray-800 ">
              <div className="w-[70%] mx-4">
                <input type="text" placeholder="Type here" className="input w-[100%] border border-gray-600 rounded-full" />
              </div>
              <button className="text-3xl">
                 <BiSend />
               </button>
           </div>
        </>
    )
}
export default Type;