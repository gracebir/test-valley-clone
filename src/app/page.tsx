/** @format */

import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className='w-full'>
            <Header />
            <main className='max-w-[960px] mx-auto'>
                <Hero />
                <Categories />
            </main>
        </div>
    );
}
