import React from 'react';
import Stephanie from '../assets/Testimonials/Stephanie.jpeg';
import Christopher from '../assets/Testimonials/Christopher.jpeg';
import Eunice from '../assets/Testimonials/Eunice.jpeg';
import Chidiebube from '../assets/Testimonials/Chidiebube.jpeg';
import Uduak from '../assets/Testimonials/Uduak.jpeg';
import Brume from '../assets/Testimonials/Brume.jpeg';

function Testimonial(props) {
    const Testimonies = [
        {image: Christopher, name: 'Christopher Uzoma', comment: 'I’ve been consistently impressed with WESC. The team is responsive, delivers excellent results promptly, and goes above and beyond to ensure satisfaction. Highly satisfied !', school: 'Arizona State University, USA', program: 'Robotics and Autonomous Systems (System Engineering)'},
        {image: Eunice, name: 'Eunice Edokpolor', comment: '"You guys have been amazing, your admission processing is very prompt and relating to your client is excellent."', school: 'Canadore College Canada', program: 'Personal Support Worker'},
        {image: '',name: 'Oluwatosin Bello', comment: 'I loved the services rendered, you not only help to apply to schools but also follow up and give assistance when necessary, I am really so grateful for the help❤️', school: 'Conestoga College, Canada', program: 'Occupational Health, Safety & Wellness'},
        {image: Stephanie, name: 'Stephenie Ugochukwu Obiazikwor', comment: 'I had a fantastic experience working with WESC education to secure my spot at DePaul. Their guidances were invaluable throughout the process, and I couldnt be happier with the outcome. Highly recommend their services to anyone seeking assistance with their academic pursuits.', school: 'DePaul University, USA', program: 'Master of Science - Data Science - Computational Methods'},
        {image: Chidiebube, name: 'Chidiebube Joseph Uduh', comment: "Highly recommended, if you're seeking to gain admissions abroad, they guide you all the way until you enter you begin your first lecture even when you're overseas. Always responsive to any & every urgent request or requirement from the school, step by step guidance on do's & don'ts... I highly recommend this company for anyone interested in travel study. The schools also respond to their direct mails as I presume they have affiliations with this agency. Great job team keep the good work!", school: 'Georgian College, Canada.', program: 'Supply Chain Management.'},
        {image: Brume, name: 'Brume Osale Charles', comment: 'Your services are really great. I mean you no only help secure admission but you also help students with obtaining financial aid which is usually the greatest challenge we face even after getting admission. Keep it up. 👍', school: 'Massachusetts College of Pharmacy and  Health Sciences', program: 'Master of Public Health'},
        {image: Uduak, name: 'Uduak Okon Iwatt', comment: 'I can attest to the professional service offered  by WESC NIGERIA. Quick response time and quality educational service.', school: 'Niagara College, Canada', program: 'Business -Accounting'},
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
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={testimony.image} alt="" loading='lazy'/>
                        {/* <FaUser className='relative object-cover w-24 h-24 mx-auto rounded-full text-gray-500'/> */}
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-primary rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-md font-medium text-black/70">{testimony.comment}</p>
                    </blockquote>
                    <p class="text-lg font-bold text-black mt-9">{testimony.name}</p>
                    <p class="mt-1 text-base font-medium text-gray-800">{testimony.program}</p>
                        <p class="mt-1 text-base text-gray-600">{testimony.school}</p>
                </div>
            </div>
            ))}

            

           
        </div>
    </div>
</section>

    );
}

export default Testimonial;