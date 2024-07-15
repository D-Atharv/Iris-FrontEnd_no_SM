import React from 'react';
import Middle_Names from './Middle_Names';

interface MiddleProps {
    className?: string;
}

const LeftName: React.FC<MiddleProps> = ({ className }) => {
    const names = ['John', 'Jamie', 'Doe', 'Atharv', 'James'];
    const maxVisibleNames = 5;
    const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

    // Calculate the max height dynamically
    const maxHeight = names.length <= maxVisibleNames ? names.length * nameHeight : maxVisibleNames * nameHeight;

    return (
        <div className={`flex container mx-auto items-center px-4 bg-c_line_gray h-full ${className}`}>
            <div
                className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
                style={{ maxHeight: `${maxHeight}px` }}
            >
                {names.map((name, index) => (
                    <Middle_Names key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

export default LeftName;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Middle_Names from './Middle_Names';

// interface Person {
//     name: string;
//     imageData?: string;
// }

// interface LeftNameProps {
//     className?: string;
// }

// const LeftName: React.FC<LeftNameProps> = ({ className }) => {
//     const [people, setPeople] = useState<Person[]>([]);
//     const maxVisiblePeople = 5;
//     const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

//     useEffect(() => {
//         const fetchPeople = async () => {
//             try {
//                 // Replace with your actual backend API endpoint
//                 const response = await fetch('your-backend-api-endpoint');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch people data');
//                 }
//                 const data = await response.json();
//                 setPeople(data); // Assuming data is an array of Person objects
//             } catch (error) {
//                 console.error('Error fetching people data:', error);
//             }
//         };

//         fetchPeople();
//     }, []);

//     // Calculate the max height dynamically based on the number of people
//     const maxHeight = Math.min(people.length, maxVisiblePeople) * nameHeight;

//     return (
//         <div className={`flex container mx-auto items-center px-4 bg-c_line_gray h-full ${className}`}>
//             <div
//                 className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
//                 style={{ maxHeight: `${maxHeight}px` }}
//             >
//                 {people.slice(0, maxVisiblePeople).map((person, index) => (
//                     <Middle_Names key={index} name={person.name} imageData={person.imageData} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default LeftName;




