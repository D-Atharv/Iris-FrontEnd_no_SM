// import React from 'react';
// import Image from 'next/image';
// import chat_icon from '../../../public/images/chats.svg';
// import user from '../../../public/images/user.svg';
// import calls from '../../../public/images/calls.svg';
// import plus from '../../../public/images/plus.svg';

// const LeftBottom = () => {
//     return (

//         <div className='px-4  h-full flex container mx-auto items-center bg-c_line_gray'>
//             <div className=' flex-grow '>
//                 <div className='bg-c_black rounded-xl shadow-md shadow-c_blue flex items-center py-3 justify-around '>
//                     <div className='flex flex-col items-center'>
//                         <Image src={chat_icon} alt="chat" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                         <p className='text-white'>Chat</p>
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <Image src={calls} alt="calls" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                         <p className='text-white'>Calls</p>
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <Image src={user} alt="user" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                         <p className='text-white'>Profile</p>
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <Image src={plus} alt="plus" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                         <p className='text-white'>New User</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LeftBottom;


// import React, { useState } from 'react';
// import Image from 'next/image';
// import chat_icon from '../../../public/images/chats.svg';
// import user from '../../../public/images/user.svg';
// import calls from '../../../public/images/calls.svg';
// import plus from '../../../public/images/plus.svg';
// import Modal from './Modal';

// const LeftBottom: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [username, setUsername] = useState('');
//     const [error, setError] = useState('');

//     const openModal = () => setIsOpen(true);
//     const closeModal = () => setIsOpen(false);

//     const handleAddUser = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/messages/conversations', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setError('');
//                 closeModal();
//             } else {
//                 setError(data.error || 'An error occurred');
//             }
//         } catch (err) {
//             setError('An error occurred');
//         }
//     };

//     return (
//         <>
//             <div className='px-4 h-full flex container mx-auto items-center bg-c_line_gray'>
//                 <div className='flex-grow'>
//                     <div className='bg-c_black rounded-xl shadow-md shadow-c_blue flex items-center py-3 justify-around'>
//                         <div className='flex flex-col items-center'>
//                             <Image src={chat_icon} alt="chat" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                             <p className='text-white'>Chat</p>
//                         </div>
//                         <div className='flex flex-col items-center'>
//                             <Image src={calls} alt="calls" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                             <p className='text-white'>Calls</p>
//                         </div>
//                         <div className='flex flex-col items-center'>
//                             <Image src={user} alt="user" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                             <p className='text-white'>Profile</p>
//                         </div>
//                         <div className='flex flex-col items-center' onClick={openModal}>
//                             <Image src={plus} alt="plus" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                             <p className='text-white'>New User</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal isOpen={isOpen} closeModal={closeModal}>
//                 <div>
//                     <h3 className="text-lg font-medium leading-6 text-gray-900">Add New User</h3>
//                     <div className="mt-2">
//                         <input
//                             type="text"
//                             className="border p-2 w-full rounded"
//                             placeholder="Enter username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>
//                     {error && <div className="mt-2 text-red-600">{error}</div>}
//                     <div className="mt-4">
//                         <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={handleAddUser}>
//                             Add User
//                         </button>
//                         <button type="button" className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500" onClick={closeModal}>
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// };

// export default LeftBottom;

import React, { useState } from 'react';
import Image from 'next/image';
import chat_icon from '../../../public/images/chats.svg';
import user from '../../../public/images/user.svg';
import calls from '../../../public/images/calls.svg';
import plus from '../../../public/images/plus.svg';
import Modal from './Modal';

const LeftBottom: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleAddUser = async () => {
        try {
            const token = localStorage.getItem('token'); // Adjust according to how you store the token
            const response = await fetch('http://localhost:5000/api/messages/conversations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ username }),
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                closeModal();
            } else {
                setError(data.error || 'An error occurred');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <>
            <div className='px-4 h-full flex container mx-auto items-center bg-c_line_gray'>
                <div className='flex-grow'>
                    <div className='bg-c_black rounded-xl shadow-md shadow-c_blue flex items-center py-3 justify-around'>
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
                        <div className='flex flex-col items-center' onClick={openModal}>
                            <Image src={plus} alt="plus" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                            <p className='text-white'>New User</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Add New User
                    </h3>
                    <div className="mt-2">
                        <input
                            type="text"
                            className="border p-2 w-full rounded"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {error && <div className="mt-2 text-red-600">{error}</div>}

                    <div className="mt-4">
                        <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={handleAddUser}>
                            Add User
                        </button>
                        <button type="button" className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default LeftBottom;

