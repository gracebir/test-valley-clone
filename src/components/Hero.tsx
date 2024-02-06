/** @format */
"use client";
import { BASE_URL } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

type carouselType = {
    mainBannerId: number;
    title: string;
    pcImageUrl: string;
    mobileImageUrl: string;
};

const Hero = () => {
    const [carousels, SetCarousels] = useState<Array<carouselType>>([]);
    const getCarousel = async () => {
        const response = await fetch(`${BASE_URL}/main-banner/all`);
        const data: Array<carouselType> = await response.json();
        SetCarousels(data);
    };

    useEffect(() => {
        getCarousel();
    }, []);
    return (
        <div className='w-full'>
            <div className='max-w-[960px] mx-auto'>
                <Slider
                    slidesToShow={1}
                    infinite={true}
                    arrows={false}
                    autoplay={true}
                    draggable={true}
                >
                    {carousels.map((item) => (
                        <div key={item.mainBannerId} className='h-80 w-full'>
                            <Image
                                className='w-full h-full block lg:hidden'
                                src={item.mobileImageUrl}
                                alt={item.title}
                                width={936}
                                height={324}
                            />
                            <Image
                                className='w-full h-full hidden lg:block'
                                src={item.pcImageUrl}
                                alt={item.title}
                                width={936}
                                height={324}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
