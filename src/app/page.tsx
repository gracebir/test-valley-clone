/** @format */

import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shopping from "@/components/Shopping";
import { section_1s } from "@/utils/data";

export default function Home() {
    return (
        <div className='w-full'>
            <Header />
            <main className='max-w-[960px] mx-auto'>
                <Hero />
                <Categories />
                <Shopping
                    data={section_1s}
                    title='HOT DEAL'
                    subTitle='[UP TO 34% OFF] HAPPY HOUR'
                />
                <Shopping title='New In' subTitle='#Notable new products' />
            </main>
        </div>
    );
}
