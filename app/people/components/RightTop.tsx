import Image from 'next/image'
import React from 'react'

const RightTop = () => {
    return (
        <div className="bg-c_black shadow-sm shadow-c_blue rounded-xl text-white flex items-center justify-between py-1 mt-1 px-4">
            <div className='flex items-center '>
                <Image src="/images/iris_logo.svg" alt="Iris logo" width={20} height={20} className="w-16 h-12 rounded-xl mr-6" />
                <h1>Name</h1>
            </div>
            <Image src={"/images/calls.svg"} alt="Call" width={20} height={20} className="w-8 h-6 rounded-xl  " />

        </div>
    )

}

export default RightTop
