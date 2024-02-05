/** @format */
"use client";
import { carousels } from "@/utils/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
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
                        <div key={item.id} className='h-80 w-full'>
                            <Image
                                className='w-full h-full'
                                src={item.imgUrl}
                                alt={item.alt}
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
