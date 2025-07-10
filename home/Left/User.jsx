import React from 'react';
function User()
{
    return(
        <>
           <div>
            <div className="flex space-x-4 px-6 py-3 hover:bg-slate-600 duration-300 cursor-pointer">
                    <div className="avatar avatar-online avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-14 rounded-full">
                        <span className="text-xl">AI</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold">Adnan ali</h1>
                        <span>aliadnan@gmail.com</span>
                    </div>
                </div>
           </div>
        </>
    )
}

export default User;