import React from 'react';
import Image from 'next/image';
import chat_icon from '../../../public/images/chats.svg';
import user from '../../../public/images/user.svg';
import calls from '../../../public/images/calls.svg';
import plus from '../../../public/images/plus.svg';

const LeftBottom = () => {
    return (

        <div className='px-4  h-full flex container mx-auto items-center bg-c_line_gray'>
            <div className=' flex-grow '>
                <div className='bg-c_black rounded-xl shadow-md shadow-c_blue flex items-center py-3 justify-around '>
                    <div className='flex flex-col items-center'>
                        <Image src={chat_icon} alt="chat" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Chat</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={calls} alt="calls" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Calls</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={user} alt="user" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Profile</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={plus} alt="plus" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>New User</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBottom;