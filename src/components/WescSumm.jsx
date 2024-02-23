import React from 'react';


function WescSumm(props) {
    return (
        <section className="py-10 bg-secondary sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
        <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">About WESC</h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600"><span className='font-bold'>WESC</span> is short for <span className='font-bold'>World Education Service Centre</span>. WESC is a leading technology driven education service provider and Oversees Education Consultant for over 12 years. We are in the business of helping institutions, consultants and students to meet their respective international goals and career aspirations.</p>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">To understand more on how our services helps meet your requirements, you can book a consultation session with one of our trained and certified Relationship Managers. Your Specialist Relationship Manager will provide recommendations that will help you in making a decision based on realistic and available options. At WESC, we offer a free advisory and support service for <a href="/about-us" className='underline text-orange italic'>Read more</a></p>
            </div>
            <div className="relative lg:mb-12">
                <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                <div className="pl-12 pr-6">
                    <img className="relative" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg" alt="" />
                </div>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                    <div className="max-w-xs bg-primary rounded-lg sm:max-w-md xl:max-w-md">
                        <div className="px-3 py-4 sm:px-5 sm:py-8">
                            <div className="flex items-start">
                                <p className="text-3xl sm:text-4xl">👋</p>
                                <blockquote className="ml-5">
                                    <p className="text-sm font-medium text-white sm:text-lg">“Hi, I will love to study Economics in Canada,how do i go about it ”</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</section>

    );
}

export default WescSumm;