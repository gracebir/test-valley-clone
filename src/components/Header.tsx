/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";

const Header = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    return (
        <header className='bg-white sticky top-0 w-full h-[72px] z-50'>
            <div className='max-w-[960px] mx-auto flex lg:justify-between justify-around items-center h-full'>
                <div className='flex gap-4'>
                    <Link href={"#"}>
                        <Image
                            src={"/assets/logo.svg"}
                            alt='logo'
                            width={128.345}
                            height={25.093}
                        />
                    </Link>
                    <div className='hidden lg:flex items-center gap-1'>
                        <RxHamburgerMenu
                            className='text-green-color'
                            size={16}
                        />
                        <span className='text-text-color'>category</span>
                    </div>
                </div>

                <div
                    className={`lg:flex hidden border ${
                        isInputFocused
                            ? "border-green-color"
                            : "border-gray-300"
                    } rounded-sm items-center px-3 py-2`}
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

                <div className='lg:flex gap-2 hidden'>
                    <Link href={"#"}>
                        <Image
                            src={"/assets/home-event.svg"}
                            width={28}
                            height={28}
                            alt='indicator'
                        />
                    </Link>
                    <Image
                        src={"/assets/vertical-bar.svg"}
                        width={1}
                        height={14}
                        alt='vertical-divider'
                    />
                    <Link className='text-sm text-text-color' href={"#"}>
                        Login / Sign up
                    </Link>
                </div>

                <div className='flex lg:hidden items-center text-gray-500'>
                    <VscBell className='p-3 cursor-pointer' size={48} />
                    <Image
                        className='p-3 cursor-pointer'
                        src={"/assets/search_new.svg"}
                        width={42}
                        height={44}
                        alt='vertical-divider'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
