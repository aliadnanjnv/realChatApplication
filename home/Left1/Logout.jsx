import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
function Logout()
{
    return(
        <>
          <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
          <div className="px-2 py-4">
                          <form action="">
                                  <div className="flex gap-2">
                                      
                                      <button>
                                          <MdOutlineLogout className="text-5xl text-white p-2 hover:bg-gray-600 rounded-lg duration-300 cursor-pointer " />
                                      </button>
                                  </div>
                          </form>
                     </div>
          </div>
          
        </>
    )
}

export default Logout;