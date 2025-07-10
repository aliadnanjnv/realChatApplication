import React from 'react';
function Message()
{
    return(
        <>
            <div className="p-2">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                </div>
            </div>
        </>
    )
}
export default Message;