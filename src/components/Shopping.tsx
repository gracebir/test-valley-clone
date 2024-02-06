/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import Product, { productProps } from "./Product";
import { BASE_URL, productType } from "@/utils/data";

type sectionProp = {
    title: string;
    subTitle: string;
    filter: string;
    from?: number;
    to?: number;
    data?: Array<productProps>;
};

type responseType = {
    items: Array<productType>;
};

const Shopping = ({
    title,
    subTitle,
    data,
    from = 0,
    to = 5,
    filter = "TILE",
}: sectionProp) => {
    const [products, setProducts] = useState<Array<productType>>([]);

    const getProduct = async () => {
        try {
            const response = await fetch(`${BASE_URL}/collections?${filter}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data: responseType = await response.json();
            setProducts(data.items);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

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
        <div className='grid gap-8 lg:gap-4 lg:grid-cols-9 grid-cols-1 my-8 min-h-[326px]'>
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
            <div className='col-span-7 hidden lg:block'>
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
                    {products.length !== 0 &&
                        products
                            ?.slice(from, to)
                            ?.map((product, index) => (
                                <Product
                                    key={product.id}
                                    name={product.title}
                                    price={data![index]?.price}
                                    imgUrl={product.thumbnail?.uri}
                                    discount={data![index]?.discount}
                                    like={product.rating}
                                    isReturned={data![index]?.isReturned}
                                />
                            ))}
                </Slider>
            </div>
            <div className='grid lg:hidden col-span-1 grid-cols-2'>
                {products.length &&
                    products?.map((product, index) => (
                        <Product
                            key={product.id}
                            name={product.title}
                            price={data![index]?.price}
                            imgUrl={product.thumbnail?.uri}
                            discount={data![index]?.discount}
                            like={product.rating}
                            isReturned={data![index]?.isReturned}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Shopping;
