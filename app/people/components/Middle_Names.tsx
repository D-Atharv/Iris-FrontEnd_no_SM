// // import React from 'react';
// // import Image from 'next/image';
// // import search_icon from "../../../public/images/search_icon.svg";
// // import { ConversationType } from '@/app/zustand/useConversation';

// // type MiddleNamesProps = {
// //     name: string;
// //     imageData?: string; // Make imageData optional
// // };

// // // type MiddleNamesProps = {
// // //     conversation: ConversationType;
// // //     imageData?: string; // Make imageData optional
// // // };

// // const Middle_Names: React.FC<MiddleNamesProps> = ({ name, imageData }) => {
// //     // const { id, fullName, profilePic } = conversation;
// //     return (
// //         <div className=" bg-c_black rounded-xl  my-4  shadow-sm shadow-c_white hover:bg-custom-linear-gradient">
// //             <div className="flex items-center justify-between border-b-2 py-2  rounded-xl px-4">
// //                 <div className="flex items-center">
// //                     {imageData ? (
// //                         <Image src={imageData} alt="Image" height={25} width={20} className="w-16 h-12 mr-4 border-2  border-c_white rounded-xl " />
// //                     ) : (
// //                         <div className="w-16 h-12 mr-4 border-2  border-c_white rounded-xl flex items-center justify-center">
// //                             <Image src={search_icon} alt="Placeholder" height={10} width={10} className='h-11 w-14' />
// //                         </div>
// //                     )}
// //                     {/* <p className="text-white">{conversation}</p> */}
// //                     <p className="text-white">{name}</p>

// //                 </div>
// //                 <div className="text-left text-white">
// //                     <p>Message</p>
// //                     <p>Date</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Middle_Names;


// import React from 'react';
// import Image from 'next/image';
// import search_icon from "../../../public/images/search_icon.svg";

// type MiddleNamesProps = {
//     name: string;
//     imageData?: string; // Make imageData optional
//     onClick: () => void;
//     isSelected: boolean;
// };

// const Middle_Names: React.FC<MiddleNamesProps> = ({ name, imageData, onClick, isSelected }) => {
//     return (
//         <div
//             className={`bg-c_black rounded-xl my-4 shadow-sm shadow-c_white hover:bg-custom-linear-gradient ${isSelected ? 'bg-c_blue' : ''}`}
//             onClick={onClick}
//         >
//             <div className="flex items-center justify-between border-b-2 py-2 rounded-xl px-4">
//                 <div className="flex items-center">
//                     {imageData ? (
//                         <Image src={imageData} alt="Image" height={25} width={20} className="w-16 h-12 mr-4 border-2 border-c_white rounded-xl" />
//                     ) : (
//                         <div className="w-16 h-12 mr-4 border-2 border-c_white rounded-xl flex items-center justify-center">
//                             <Image src={search_icon} alt="Placeholder" height={10} width={10} className='h-11 w-14' />
//                         </div>
//                     )}
//                     <p className="text-white">{name}</p>
//                 </div>
//                 <div className="text-left text-white">
//                     <p>Message</p>
//                     <p>Date</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Middle_Names;




import React from 'react';
import Image from 'next/image';
import search_icon from '../../../public/images/search_icon.svg';

type MiddleNamesProps = {
    name: string;
    imageData?: string | null;
    onClick: () => void;
};

const Middle_Names: React.FC<MiddleNamesProps> = ({ name, imageData, onClick }) => {
    return (
        <div className="bg-c_black rounded-xl my-4 shadow-sm shadow-c_white hover:bg-custom-linear-gradient cursor-pointer" onClick={onClick}>
            <div className="flex items-center justify-between border-b-2 py-2 rounded-xl px-4">
                <div className="flex items-center">
                    {imageData ? (
                        <Image src={imageData} alt="Image" height={25} width={20} className="w-16 h-12 mr-4 border-2 border-c_white rounded-xl" />
                    ) : (
                        <div className="w-16 h-12 mr-4 border-2 border-c_white rounded-xl flex items-center justify-center">
                            <Image src={search_icon} alt="Placeholder" height={10} width={10} className='h-11 w-14' />
                        </div>
                    )}
                    <p className="text-white">{name}</p>
                </div>
                <div className="text-left text-white">
                    <p>Message</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    );
};

export default Middle_Names;
