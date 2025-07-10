import React from "react";
import { IoSearch } from "react-icons/io5";
function Search(){
    return(
        <>
           <div className="h-[10vh] ">
                <div className="px-2 py-4">
                        <form action="">
                                <div className="flex gap-2">
                                    <label className="input w-[100%]">
                                        <input  type="search" required placeholder="Search" className="rounded-full"/>
                                    </label>
                                    <button>
                                        <IoSearch className="text-5xl text-white p-2 hover:bg-gray-600 rounded-full duration-300"/>
                                    </button>
                                </div>
                        </form>
                </div>
           </div>
        </>
    )
}

export default Search;