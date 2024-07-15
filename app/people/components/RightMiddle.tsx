import React, { useEffect, useRef } from 'react';

interface RightMiddleProps {
    messages: string[];
}

const RightMiddle: React.FC<RightMiddleProps> = ({ messages }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div
            ref={containerRef}
            className="text-white shadow-sm shadow-c_blue bg-black h-full rounded-xl overflow-y-auto flex flex-col-reverse right-middle-container hide-scrollbar p-4"
        >
            {messages.slice(0).reverse().map((message, index) => (
                <div key={index} className='flex justify-end mb-2'>
                    <div className='bg-c_line_gray text-white rounded-lg p-2  md:max-w-64 xl:max-w-96 break-words'>
                        {message}
                    </div>
                </div>
            ))}
            <div ref={containerRef} className="flex-shrink-0" />
        </div>
    );
};

export default RightMiddle;

