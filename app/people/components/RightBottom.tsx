'use client'

import React, { useState } from 'react'
interface RightBottomProps {
    onSend: (message: string) => void;
}

const RightBottom: React.FC<RightBottomProps> = ({ onSend }) => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.trim() !== '') {
            onSend(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="text-white shadow-sm  shadow-c_blue bg-black rounded-xl flex items-center justify-center  ">
            <form className="flex items-center space-x-2 w-full mx-10 mr-6">
                <input
                    type='text'
                    placeholder="Search"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-grow  bg-c_gray rounded-md shadow-sm   hover:border-c_blue shadow-c_white text-white px-2 py-2"
                />
                <div className='mt-2'>
                    <button type="button" onClick={sendMessage} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-c_blue to-c_blue group-hover:from-c_blue group-hover:to-c_blue hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-c_blue dark:focus:ring-c_blue">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Send
                        </span>
                    </button>
                </div>

            </form>
        </div>
    )
}

export default RightBottom
