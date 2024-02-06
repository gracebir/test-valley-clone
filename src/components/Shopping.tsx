/** @format */
"use client";
import React, { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import Product, { productProps } from "./Product";

type sectionProp = {
    title: string;
    subTitle: string;
    data?: Array<productProps>;
};

const Shopping = ({ title, subTitle, data }: sectionProp) => {
    let sliderRef = useRef(null);
    const next = () => {
        //@ts-ignore
        sliderRef.slickNext();
    };
    const previous = () => {
        //@ts-ignore
        sliderRef.slickPrev();
    };
    return (
        <div className='grid gap-8 lg:grid-cols-8 grid-cols-1 my-8 min-h-[326px]'>
            <div className='lg:col-span-2 col-span-1 flex flex-col justify-between'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-black'>
                        {title}
                    </h1>
                    <span className='text-xs text-[#999]'>{subTitle}</span>
                </div>

                <div className='lg:flex hidden items-center gap-2 text-[#999]'>
                    <button onClick={previous}>
                        <MdArrowBackIosNew size={16} />
                    </button>
                    <button onClick={next}>
                        <MdArrowForwardIos size={16} />
                    </button>
                </div>
            </div>
            <div className='col-span-6 hidden lg:block'>
                <Slider
                    ref={(slider) => {
                        //@ts-ignore
                        sliderRef = slider;
                    }}
                    className='hidden lg:block'
                    slidesToShow={4}
                    infinite={true}
                    arrows={false}
                    autoplay={true}
                    draggable={true}
                >
                    {data?.map((product) => (
                        <Product {...product} />
                    ))}
                </Slider>
            </div>
            <div className='grid lg:hidden col-span-1 grid-cols-2'>
                {data?.map((product) => (
                    <Product {...product} />
                ))}
            </div>
        </div>
    );
};

export default Shopping;
