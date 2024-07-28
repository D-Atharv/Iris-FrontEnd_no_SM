// // import React from 'react';
// // import Middle_Names from './Middle_Names';

// // interface MiddleProps {
// //     className?: string;
// // }

// // const LeftName: React.FC<MiddleProps> = ({ className }) => {
// //     const names = ['John', 'Jamie', 'Doe', 'Atharv', 'James', "Ramanujan"];
// //     const maxVisibleNames = 5;
// //     const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

// //     // Calculate the max height dynamically
// //     const maxHeight = names.length <= maxVisibleNames ? names.length * nameHeight : maxVisibleNames * nameHeight;

// //     return (
// //         <div className={`flex container mx-auto items-center px-4 bg-c_line_gray h-full ${className}`}>
// //             <div
// //                 className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
// //                 style={{ maxHeight: `${maxHeight}px` }}
// //             >
// //                 {names.map((name, index) => (
// //                     <Middle_Names key={index} name={name} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default LeftName;


// // // import React from 'react';
// // // import Middle_Names from './Middle_Names';
// // // import useGetConversations from './useGetConversations/useGetConversations';

// // // interface MiddleProps {
// // //     className?: string;
// // // }

// // // const LeftName: React.FC<MiddleProps> = ({ className }) => {

// // //     const { conversations, loading } = useGetConversations();

// // //     const maxVisibleNames = 5;
// // //     const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

// // //     // Calculate the max height dynamically
// // //     const maxHeight = conversations.length <= maxVisibleNames ? conversations.length * nameHeight : maxVisibleNames * nameHeight;

// // //     return (
// // //         <div className={`flex container mx-auto items-center px-4 bg-c_line_gray h-full ${className}`}>
// // //             <div
// // //                 className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
// // //                 style={{ maxHeight: `${maxHeight}px` }}
// // //             >
// // //                 {conversations.map((conversation, index) => (
// // //                     <Middle_Names key={index} conversation={conversation} />
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default LeftName;







// import React from 'react';
// import Middle_Names from './Middle_Names';

// interface MiddleProps {
//     className?: string;
//     selectedName: string | null;
//     setSelectedName: (name: string) => void;
// }

// const LeftName: React.FC<MiddleProps> = ({ className, selectedName, setSelectedName }) => {
//     const names = ['John', 'Jamie', 'Doe', 'Atharv', 'James', 'Ramanujan'];
//     const maxVisibleNames = 5;
//     const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

//     // Calculate the max height dynamically
//     const maxHeight = names.length <= maxVisibleNames ? names.length * nameHeight : maxVisibleNames * nameHeight;

//     return (
//         <div className={`flex container mx-auto items-center px-4 bg-c_line_gray h-full ${className}`}>
//             <div
//                 className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
//                 style={{ maxHeight: `${maxHeight}px` }}
//             >
//                 {names.map((name, index) => (
//                     <Middle_Names
//                         key={index}
//                         name={name}
//                         onClick={() => setSelectedName(name)}
//                         isSelected={selectedName === name}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default LeftName;

import React from 'react';
import Middle_Names from './Middle_Names';

interface LeftNameProps {
    users: { id: string; fullName: string; profilePic: string | null }[];
    onNameClick: (name: string) => void;
}

const LeftName: React.FC<LeftNameProps> = ({ users, onNameClick }) => {
    const maxVisibleNames = 5;
    const nameHeight = 85; // Adjust this value to match the height of each name component in pixels
    const maxHeight = users.length <= maxVisibleNames ? users.length * nameHeight : maxVisibleNames * nameHeight;

    return (
        <div className="flex container mx-auto items-center px-4 bg-c_line_gray h-full">
            <div
                className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
                style={{ maxHeight: `${maxHeight}px` }}
            >
                {users.map((user) => (
                    <Middle_Names key={user.id} name={user.fullName} imageData={user.profilePic} onClick={() => onNameClick(user.fullName)} />
                ))}
            </div>
        </div>
    );
};

export default LeftName;


