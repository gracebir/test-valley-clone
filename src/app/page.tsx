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
                <div className='px-4 lg:px-6'>
                    <Categories />
                    <Shopping
                        data={section_1s}
                        filter='SINGLE'
                        title='HOT DEAL'
                        subTitle='[UP TO 34% OFF] HAPPY HOUR'
                    />
                    <Shopping
                        from={6}
                        to={12}
                        title='New In'
                        filter='TILE'
                        subTitle='#Notable new products'
                        data={section_2s}
                    />
                    <Shopping
                        from={13}
                        to={19}
                        data={section_1s}
                        filter='SINGLE'
                        title='Benheim new store EVENT'
                        subTitle='Lowest price guaranteed, 5% download coupon
'
                    />
                    <Shopping
                        from={19}
                        to={24}
                        filter='SINGLE'
                        title='Logitech after-sales service...'
                        subTitle='#Guaranteed after-sales service as a genuine product, not a parallel import! return possible...'
                        data={section_logitech}
                    />

                    <Shopping
                        from={25}
                        to={31}
                        title='Thinner and more powerful LG Gram'
                        filter='SINGLE'
                        subTitle='Additional discount coupon + 30-day trial fee reduction event'
                        data={section_lg}
                    />
                    <Shopping
                        from={32}
                        to={36}
                        filter='SINGLE'
                        title='Lowest price on gaming devices...'
                        subTitle='#Limited quantity special price #Anticipated new work'
                        data={section_2s}
                    />
                    <Shopping
                        from={37}
                        to={42}
                        filter='SINGLE'
                        title='Electric Mat LAST BIG SALE'
                        subTitle='UP TO 64% SALE'
                        data={section_4s}
                    />
                    <Shopping
                        from={42}
                        to={49}
                        title='Recommended Lunar New Year...'
                        subTitle='UP TO 74% ▼'
                        filter='SINGLE'
                        data={section_kitchen}
                    />
                    <Shopping
                        from={50}
                        to={55}
                        filter='SINGLE'
                        title='MacBook clearance sale!'
                        subTitle='Only in Test Valley! Try it for 30 days and buy it'
                        data={section_macbook}
                    />
                </div>
            </main>
        </div>
    );
}
