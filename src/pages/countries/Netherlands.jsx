import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/Netherlands2.jpg';
import Img2 from '../../assets/CountryStuStock/Img11.jpg';
import Img3 from '../../assets/CountryStuStock/Img12.jpg';


const QuickFacts = [
    'International students from all over the world come to study in the Netherlands.',
    'Studying in the Netherlands is not that expensive, compared with other English-speaking countries such as the UK or US.',
    'The Dutch educational system is of high quality and Dutch universities are acknowledged worldwide for their well-designed, modern courses and facilities.',
    'Compared with other western European locations, the cost of living in the Netherlands is relatively low.',
    'The Netherlands is known as the first non-English speaking country in which universities started to design higher education study programs in English, to attract students coming from abroad.',
    'The Netherlands is centrally located in Europe and is in easy reach of all major European cities.'
];

const country = 'NETHERLANDS'

function Netherlands() {
    const largeContent = <>
        <div class='flex gap-6 py-4 flex-col lg:flex-row justify-center '>
        <div>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Netherland or Holland? Whichever name you use, one thing is sure; it is a place of opportunities. With over 170 nationalities, it is a very multicultural society. Over 122,000 foreign students study here each year. That makes Holland the perfect place for sharing knowledge, ideas and cultures. It is also a very safe country. In fact, it is one of the 25 safest countries in the world. The Dutch character? Open, friendly and direct. Almost everyone speaks English along with another foreign language, like German or French. So you don’t have to learn Dutch to study here. As a foreign student, you will notice how welcoming and tolerant the Dutch are.
            </p>
        </div>
        <img src={Img2} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
    <div class='flex gap-6 flex-col-reverse lg:flex-row py-4 justify-center '>
    <img src={Img1} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        The Netherlands education system ranking is high in many fields of education. The Dutch higher education institutions offer 1,560 international study programs and courses, of which 1,543 are taught entirely in English. The Holland education system focuses on teamwork, producing an ideal environment to make friends.

        </p>
    </div>
</div>
<div class='flex gap-6 flex-col lg:flex-row py-4 justify-center '>
    <div>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        The Netherland educational system focuses on teamwork, creating an ideal environment to make friends. The teaching style in the Netherlands can be described as interactive and student-centered, providing students with the attention and freedom they need to develop their own opinions and creativity in applying their newly acquired knowledge. By studying in the Netherlands, you will develop an open mind and increase your international orientation. 
        </p>
    </div>
    <img src={Img3} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
</div>
<section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl">
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">HERE ARE SOME QUICK FACTS ABOUT <span className='text-orange'>{country}</span></h2>
        <div class="grid items-end grid-cols-1 gap-y-10  md:gap-x-20">
            <div>
                <ul class="mt-12 space-y-4 md:mt-20">
                    {QuickFacts.map((facts, idx) => (
                         <li key={idx} class="flex items-start space-x-3">
                         <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-orange rounded-full">
                             <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                             </svg>
                         </div>
                         <p class=" text-base leading-relaxed text-blue-100">{facts}</p>
                     </li>
                    ))}

                </ul>
            </div>
        </div>
    </div>
</section>

    </>
    return (
        <div>
            <Navbar/>
            <Information content={largeContent}/>
            <Footer/>
        </div>
    );
}

export default Netherlands;