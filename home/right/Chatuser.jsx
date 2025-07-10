import React from 'react';
function Chatuser()
{
    return(
        <>
        <div className="pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
            <div >
            <div className="avatar avatar-online avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-14 rounded-full">
                            <span className="text-xl">AI</span>
                            </div>
                        </div>
            </div>
            <div>
                <h1 className="text-xl">Ankit Pathak</h1>
                <span className="text-sm">Online</span>
            </div>
        </div>
        </>
    )
}

export default Chatuser;