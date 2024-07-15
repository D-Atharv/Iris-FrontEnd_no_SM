'use client'

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import search_icon from "../../../public/images/search_icon.svg";

const Left = () => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setSearchText("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-c_line_gray h-full " >
            <div className="px-4 pt-3 xl:pt-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Image src={search_icon} alt="Search" width={15} height={15} className="w-15 h-15" />
                    </div>
                    <input
                        ref={inputRef}
                        type="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-10 bg-c_black w-full p-2 xl:pl-10 pr-4 rounded-md shadow-sm shadow-c_blue text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default Left;

