/** @format */
"use client";
import { BASE_URL } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type categoryType = {
    mainShortcutId: number;
    title: string;
    imageUrl: string;
};

const Categories = () => {
    const [categories, setCategories] = useState<Array<categoryType>>([]);
    const getCategories = async () => {
        const response = await fetch(`${BASE_URL}/main-shortcut/all`);
        const data: Array<categoryType> = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className='px-4 my-8 flex flex-wrap gap-2 justify-between'>
            {categories.map((category) => (
                <div
                    className='cursor-pointer gap-2 max-w-[64px] flex flex-col items-center'
                    key={category.mainShortcutId}
                >
                    <Image
                        className='w-[48px] h-[48px] lg:w-[62px] lg:h-[62px]'
                        src={category.imageUrl}
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
