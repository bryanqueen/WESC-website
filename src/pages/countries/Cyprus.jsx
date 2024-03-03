import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/Cyprus2.jpg';
import Img2 from '../../assets/CountryStuStock/Img4.jpg';
import Img3 from '../../assets/CountryStuStock/Img5.jpg';
import Img4 from '../../assets/CountryStuStock/Img15.jpg';
import Img5 from '../../assets/CountryStuStock/Img14.jpg';
import { ImageGrid } from '../../components/ImageGrid';

const QuickFacts = [
    'Besides its beautiful landscape, Cyprus is also becoming a center of education in the region with the help of investments from large international organizations.',
    'Cyprus is an island divided into northern and southern parts. The northern part is led by Turkey and it is called the Turkish Republic of Northern Cyprus, and Southern Cyprus is led by Greece and it is called the Republic of Cyprus',
    'As Cyprus is located at the crossroad of Africa, Asia, and Europe it has experienced many different cultures through time.'
]

const country = 'CYPRUS'
function Cyprus() {
    const largeContent = <>
    <div class='flex gap-6 py-4 flex-col lg:flex-row justify-center '>
        <div>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Studying in Cyprus may be interesting for many students, as in addition to the well-ranked universities in the country, the cost of studying in Cyprus is also very reasonable. Cyprus provides a great opportunity for students to study in different fields such as finance, art, music, and medical and paramedical fields. One of the most important things that make studying in Cyprus ideal for many students is the possibility of studying medicine entrance exam to be accepted in this field.
            </p>
        </div>
        <img src={Img2} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
    <div class='flex gap-6 flex-col lg:flex-row justify-center py-4'>
    <div>
        <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        Students can choose from different institutions of higher education at which to pursue a bachelor’s, master’s, or doctorate degree. On average, a bachelor’s degree will take four years, while a master’s can be completed in one to two years. The length it takes to complete a doctorate degree varies widely, but on average, it can take anywhere from three to five years.
        </p>
    </div>
    <img src={Img1} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
</div>
<div class='flex gap-6 flex-col-reverse lg:flex-row py-4 justify-center '>
    <img src={Img3} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        The education system in Cyprus offers three degrees: bachelor’s, master’s, and doctorate degrees. Cyprus offers a wide-range of degree programs in numerous fields and disciplines. As an international student, you are welcome to complete all or part of your education in Cyprus. Like other countries, there are both public and private universities.

        </p>
    </div>
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
                {/* <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Higher education (ages 18+)</h3> */}
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        <span className='font-bold text-gray-800'>The bachelor's degree</span> in Cyprus is four years. To study at the undergraduate level, it is necessary to have a diploma along with transcripts. Students must pass at least 250 credits in this course. To study in Cyprus for a bachelor's degree, one must offer IELTS 5.5 or 6. Of course, studying in Cyprus is also possible without a language degree. In that case, the student's English level will be determined, through a language test, and depending on their level, an English language course will be held for him/her in Cyprus.
        </p>
        <p className='mt-4 text-base leading-relaxed text-gray-600'>
        <span className='font-bold text-gray-800'>The Master's degree</span> in Cyprus follows a two-year education system that consists of four semesters. People who want to study for a master's degree must have a bachelor's degree related to their field of study. To enter the universities of Cyprus as a postgraduate student you do not need to pass a special exam and admission is based on the student's academic record. Master's degree, as well as a doctorate degree in Cyprus, is in English, but an English language degree is not required. If you have an IELTS 6.5 degree or equivalent, you will not be required to take a language test. The list of master's degree programs at the University of Cyprus is so extensive that all applicants can study in a field of interest that matches their educational background.
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

export default Cyprus;