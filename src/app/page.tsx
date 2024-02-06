/** @format */

import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shopping from "@/components/Shopping";
import {
    section_1s,
    section_2s,
    section_4s,
    section_kitchen,
    section_lg,
    section_logitech,
    section_macbook,
} from "@/utils/data";

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
                <Shopping
                    title='New In'
                    subTitle='#Notable new products'
                    data={section_2s}
                />
                <Shopping
                    data={section_1s}
                    title='Benheim new store EVENT'
                    subTitle='Lowest price guaranteed, 5% download coupon
'
                />
                <Shopping
                    title='Logitech after-sales service...'
                    subTitle='#Guaranteed after-sales service as a genuine product, not a parallel import! return possible...'
                    data={section_logitech}
                />

                <Shopping
                    title='Thinner and more powerful LG Gram'
                    subTitle='Additional discount coupon + 30-day trial fee reduction event'
                    data={section_lg}
                />
                <Shopping
                    title='Lowest price on gaming devices...'
                    subTitle='#Limited quantity special price #Anticipated new work'
                    data={section_2s}
                />
                <Shopping
                    title='Electric Mat LAST BIG SALE'
                    subTitle='UP TO 64% SALE'
                    data={section_4s}
                />
                <Shopping
                    title='Recommended Lunar New Year...'
                    subTitle='UP TO 74% ▼'
                    data={section_kitchen}
                />
                <Shopping
                    title='MacBook clearance sale!'
                    subTitle='Only in Test Valley! Try it for 30 days and buy it'
                    data={section_macbook}
                />
            </main>
        </div>
    );
}
