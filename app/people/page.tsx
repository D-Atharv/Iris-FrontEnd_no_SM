'use client'

import React, { useState } from 'react';
import Header from './components/Header';
import Left from './components/Left';
import RightTop from './components/RightTop';
import LeftName from './components/LeftName';
import Bottom from './components/LeftBottom';
import RightBottom from './components/RightBottom';
import RightMiddle from './components/RightMiddle';
import { useAuthContext } from '../components/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const App: React.FC = () => {
    const { authUser, setAuthUser, isLoading } = useAuthContext();
    const router = useRouter();

    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = (message: string) => {
        setMessages([...messages, message]);
    };


    useEffect(() => {
        if (!authUser) {
            router.push('/login');
        }
    }, [authUser, router]);

    return (
        <>
            <div className='grid min-h-screen w-screen gap-y-0 bg-c_line_gray'>
                <div className='sticky top-0 w-screen z-10 '><Header /></div>

                <div className='grid lg:grid-cols-12 row-span-12 '>
                    <div className='col-span-4 grid grid-rows-10 xl:border-r-4 border-c_black '>
                        <div className='sticky top-0 row-span-1'><Left /></div>
                        <div className='row-span-7'><LeftName /></div>
                        <div className='sticky bottom-0 row-span-2'><Bottom /></div>
                    </div>

                    <div className='hidden lg:grid grid-rows-11 col-span-8 px-4  pb-0  '>
                        <div className='row-span-1  sticky top-0  '><RightTop /></div>
                        <div className='row-span-9 py-1 pb-1 overflow-y-auto right-middle-container'><RightMiddle messages={messages} /></div>
                        <div className='row-span-1 sticky bottom-4 '><RightBottom onSend={handleSend} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;




