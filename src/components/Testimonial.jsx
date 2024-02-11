import React from 'react';
import { FaUser } from "react-icons/fa6";

function Testimonial(props) {
    const Testimonies = [
        {name: 'Stephanie', comment: '', school: '', program: ''},
        {name: 'Amara', comment: '', school: '', program: ''},
        {name: 'Abimbola', comment: '', school: '', program: ''},
        {name: 'Abiodun', comment: '', school: '', program: ''},
        {name: 'Kenechukwu', comment: '', school: '', program: ''}
    ]
    return (
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">What our <span class="text-primary">Students</span> are saying</h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            {Testimonies.map((testimony, idx) => (
            <div key={idx} class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        {/* <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src='' alt="" /> */}
                        <FaUser className='relative object-cover w-24 h-24 mx-auto rounded-full text-gray-500'/>
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-primary rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-md font-medium text-black/70">Big Thanks to WESC, i am able to study in my dream university</p>
                    </blockquote>
                    <p class="text-lg font-bold text-black mt-9">{testimony.name}</p>
                    <p class="mt-1 text-base font-medium text-gray-800">Mechanical Engineering</p>
                    <p class="mt-1 text-base text-gray-600">Brock University</p>
                </div>
            </div>
            ))}

            

           
        </div>
    </div>
</section>

    );
}

export default Testimonial;