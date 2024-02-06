/** @format */
"use client";
import Image from "next/image";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { IoMdStar } from "react-icons/io";

export type productProps = {
    name: string;
    imgUrl: string;
    price: string;
    discount?: string;
    like: number;
    isSupprised?: boolean;
    isDiscount?: boolean;
    isReturned?: boolean;
};

const Product = ({
    name,
    imgUrl,
    price,
    discount,
    like,
    isDiscount,
    isSupprised,
    isReturned,
}: productProps) => {
    return (
        <div className='mx-4 flex flex-col gap-2'>
            <div className='w-[174px] h-[174px] relative'>
                <Image
                    src={imgUrl}
                    className='w-full h-full rounded-sm'
                    width={100}
                    height={100}
                    alt={name}
                />
                {isReturned && (
                    <div className='bg-[#009E8A] absolute bottom-2 left-1 w-[122px] px-4 py-[1px] rounded-sm flex items-center'>
                        <TiArrowBack size={10} className='text-white' />
                        <span className='text-xs'>return possibe</span>
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-[15px]'>{name.substring(0, 33)}...</span>
                <span className='font-semibold text-lg'>
                    {discount} {price}$
                </span>
                {isSupprised && (
                    <span className='text-xs font-medium'>
                        Suprised discount
                    </span>
                )}

                <div className='flex items-center gap-2'>
                    <IoMdStar size={10} />
                    <span className='text-xs'>{like}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
