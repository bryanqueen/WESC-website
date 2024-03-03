import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Img1 from '../../assets/CountryStuStock/Img13.jpg';
import Img2 from '../../assets/SideAttractions/NZealand2.jpg';
import Img3 from '../../assets/CountryStuStock/Img14.jpg';
import Img4 from '../../assets/CountryStuStock/Img7.jpg';
import Img5 from '../../assets/CountryStuStock/Img6.jpg';
import { ImageGrid } from '../../components/ImageGrid';


const QuickFacts = [
    'New Zealand is one of the safest countries in the world',
    'Māori culture and heritage are an important part of Kiwi life',
    'There Are Only Eight Universities In New Zealand',
    'You Will Need To Be More Independent At University',
    'You Will Need To Be More Independent At University',
    'Tipping Etiquette Is Different',
    'The Seasons Are Flipped'

];

const country = 'NEW ZEALAND';



function NewZealand(props) {

    const largeContent = <>
          <div class='flex gap-6 py-4 flex-col lg:flex-row justify-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            New Zealand's higher education system offers a wide range of programmes and education providers to choose from, in any region of the country.  Qualifications gained in New Zealand are highly sought after by employers and other education providers around the world. Graduates from New Zealand are valued by employers for their ability to think critically and solve problems creatively.  
At every study level, New Zealand can give you a high-quality education that will enable you to achieve your goals. Students in New Zealand are supported to solve problems, process information, work with others, create and innovate.

            </p>
        </div>
        <img src={Img1} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
<div class='flex gap-6 flex-col-reverse lg:flex-row justify-center py-4'>
    <img src={Img2} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        The New Zealand Qualifications Framework (NZQF) is a system for acknowledging the level and quality of qualifications offered by New Zealand education providers. All qualifications listed on the NZQF come with an assurance of quality that is recognised and trusted worldwide. <br />
        <span className='text-gray-800 font-medium text-md'>Study levels – the New Zealand Qualifications Framework</span> <br />
The New Zealand Qualifications Framework (NZQF) is a system for acknowledging the level and quality of qualifications offered by New Zealand education providers. All qualifications listed on the NZQF come with an assurance of quality that is recognised and trusted worldwide.
        </p>
    </div>
</div>
    <div class='flex gap-6 flex-col lg:flex-row justify-center py-4'>
        <div>
        <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed'>
        <h2 class='text-lg md:text-2xl font-medium'>The New Zealand Qualifications Framework has 10 levels:</h2>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        •	Levels 1-4 cover the National Certificate of Educational Achievement (NCEA) - the main qualification in secondary schools, and basic vocational training.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        •	Levels 5-6 cover sub-degree vocational certificates and diplomas.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        •	Levels 7-10 cover degrees, graduate and postgraduate qualifications.
        </p>
        <p className='max-w-lg mx-auto mt-4 text-base font-medium leading-relaxed text-gray-00'>
        The NZQF study level indicates how advanced a qualification is. It is also relevant for post-study work visas for international students in New Zealand
        </p>
    </p>
    </div>
    <img src={Img3} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
</div>
<section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl">
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">HERE ARE SOME QUICK FACTS ABOUT <span className='text-orange'>{country}</span></h2>
        <div class="grid items-end grid-cols-1 md:grid-cols-2 gap-y-10  md:gap-x-20">
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
            <ImageGrid Img1={Img4} Img2={Img5}/>
        </div>
    </div>
</section>
<section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6  md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">UNDERSTANDING YOUR OPTIONS </h2>
                <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Higher education (ages 18+)</h3>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        New Zealand has eight state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs) which have been unified into the Te Pūkenga- New Zealand Institute of Skills and Technology (NZIST), and about 550 Private Training Establishments (PTEs), which include English language schools.
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

export default NewZealand;