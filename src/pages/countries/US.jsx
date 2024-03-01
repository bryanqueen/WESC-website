import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/US2.jpg'


const QuickFacts = [
    'There are both public and private colleges/universities in the US. Most of these are operated by the states and territories.',
    'As noted earlier in this section, “college” and “university” are often used interchangeably, but they sometimes do mean different things to different people.',
    'Quality assurance and accreditation for institutions and programs in the US is carried out by private, non-governmental organizations',
    'Each HEI will have different admissions practices.'
]

const country = 'UNITED STATES'

function US() {
    const largeContent = <>
        <div class='flex gap-6 py-4 flex-col lg:flex-row justify-center '>
        <div>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            The United States of America, or the USA, has emerged as a popular hotspot among students worldwide for studying abroad. With numerous top-ranking Universities, the country hosts over a million international students yearly for their study abroad in US college plans. There are many reasons why studying in the USA for international students is a better alternative.
            </p>
        </div>
        <img src='' alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
    <div class='flex gap-6 flex-col-reverse lg:flex-row py-4 justify-center '>
    <img src={Img1} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        If you have decided that ‘I want to study in the USA!’, understanding the country's education system is the first step towards this goal. In the US, the setup is divided into four levels:
        <ul className='p-6 md:pl-12 text-gray-800 font-medium flex flex-col gap-4'>
            <li>
                (1) Elementary	 
            </li>

            <li>
            (2) Middle School   
            </li>

            <li>
            (3) 3.High School
            </li>
            <li>
                (4) Higher Education: <span className='text-gray-600 font-normal'>This is further categorized into: 
                    Associate degrees, Bachelor's degrees, Master's degrees and Doctoral degrees
                </span>
            </li>
        </ul>
        </p>
    </div>
</div>
<div class='flex gap-6 flex-col lg:flex-row justify-center py-4'>
    <div>
        <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        <span className='text-gray-800 font-medium'>The USA is a Safe Study Abroad Destination:</span> The United States of America is recognized as one of the best study-abroad destinations for global aspirants. It also offers a safe working and study environment for the students. Strict regulations are applied to every aspect, which the candidates must comply with to settle in quickly. Apart from significant authorities, there are also proper guidelines on student conduct that should be followed. Most university campuses have their security teams to ensure inclusive student safety.
        </p>
    </div>
    <img src='' alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
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
<section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6  md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"> Apply for a study permit in USA</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        <span className='font-bold text-gray-800'>Apply For Course:</span> To start with your Master's or Bachelor's study in the USA, you must first select a course. America Universities are known to offer many program options to all their students. Therefore, selecting one can become a challenge for you.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        <span className='font-bold text-gray-800'>Receive Acceptance Letter:</span> Always remember the deadlines. Usually, the application submission starts around 10 months before the session starts. You must prepare and submit your application by October or November (Spring Semester). Staying early can give you a head start and higher chances of getting selected.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        <span className='font-bold text-gray-800'>Applying for Student Visa:</span> Getting a Visa is one of the most critical steps in studying abroad. But, there are three main types of Student Visa offered by the USA:
        <div className='pl-6'>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        ●       F1: Regular Student Visa that applies to students funding themselves with the help of family or friends. 
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        ●       J1: Ideal for joining study and work courses offered by universities or colleges.  
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        ●       M-1: Visa for students applying to Vocational or Non-Academic programs.  
        </p>
        </div>
        </p>
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

export default US;