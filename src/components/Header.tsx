/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    return (
        <header className='bg-white sticky top-0 w-full h-[72px] z-50'>
            <div className='max-w-[960px] mx-auto flex justify-between items-center h-full'>
                <div className='flex gap-4'>
                    <Link href={"#"}>
                        <Image
                            src={"/assets/logo.svg"}
                            alt='logo'
                            width={128.345}
                            height={25.093}
                        />
                    </Link>
                    <div className='flex items-center gap-1'>
                        <RxHamburgerMenu
                            className='text-green-color'
                            size={16}
                        />
                        <span className='text-text-color'>category</span>
                    </div>
                </div>

                <div
                    className={`border ${
                        isInputFocused
                            ? "border-green-color"
                            : "border-gray-300"
                    } rounded-sm flex items-center px-3 py-2`}
                >
                    <button>
                        <IoSearchOutline size={20} />
                    </button>
                    <input
                        className='outline-none px-2'
                        type='text'
                        placeholder='if you wondering whether to buy it or not'
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                    />
                </div>

                <div></div>
            </div>
        </header>
    );
};

export default Header;
