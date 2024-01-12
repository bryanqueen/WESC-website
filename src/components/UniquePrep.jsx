import React from 'react';
import BackgroundImage from '../assets/img2.jpg'


function UniquePrep(props) {
    const data = [
        {number: '2500+', text: 'Colleges and Universities'},
        {number: '12+', text: 'Countries & Europe'},
        {number: '1567+', text: 'Clients'}
    ]
    return (
        <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src={BackgroundImage} alt="" />
    </div>
    <div class="absolute inset-0 bg-primary/50"></div>
    <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">Our unique prepostion</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            {data.map((data) => (
                <div>
                    <h3 className="font-bold text-7xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-red">{data.number}</span>
                    </h3>
                    <p className="mt-4 text-xl font-medium text-white">{data.text}</p>
                </div>
            ))}

        </div>
    </div>
</section>
    );
}

export default UniquePrep;