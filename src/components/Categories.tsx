/** @format */
"use client";
import { categories } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Categories = () => {
    return (
        <div className='px-4 my-8 flex flex-wrap gap-2 justify-between'>
            {categories.map((category) => (
                <div
                    className='cursor-pointer gap-2 max-w-[64px] flex flex-col items-center'
                    key={category.id}
                >
                    <Image
                        className='w-[48px] h-[48px] lg:w-[62px] lg:h-[62px]'
                        src={category.img}
                        alt={category.title}
                        width={62}
                        height={62}
                    />
                    <span className='text-[13px] text-center text-text-color'>
                        {category.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Categories;
