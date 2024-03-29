import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/Germany2.jpg';
import Img2 from '../../assets/CountryStuStock/Img8.jpg';
import Img3 from '../../assets/CountryStuStock/Img9.jpg';
import Img4 from '../../assets/CountryStuStock/Img11.jpg';
import { ImageGrid } from '../../components/ImageGrid';

const QuickFacts = [
    'Outstanding Universities',
    'Germany is a Safe Country',
    'Stable Country',
    'Diversity',
    'Wide Range of Study Programmes',
    'English-Taught Programmes',
    'Practice-Orientated Studies',
    'Lower Tuition Fees',
    'Scholarships',
    'Affordable Cost Of Living'
];

const country = 'GERMANY'

function Germany(props) {
    const largeContent = <>
    <div class='flex gap-6 py-4 flex-col lg:flex-row justify-center '>
        <div>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Germany is one of the most industrialized countries in the world. A global forerunner in industry and technology, Germany is a highly developed country with an excellent standard of living and a social market economy widely considered to be one of the most efficient in the world. For two consecutive years, Germany has been ranked the best place to study abroad in Europe and third in the world. Germany is a country in the heart of Western Europe. It shares borders with many other European countries such as; Denmark, Poland, the Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium, the Netherlands, and the Baltic Sea. Moreover, while pursuing your education in Germany, you can benefit from the excellent transport links from Germany to other European countries. 
            </p>
        </div>
        <img src={Img2} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
    <div class='flex gap-6 flex-col-reverse lg:flex-row py-4 justify-center '>
    <img src={Img1} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        Germany is known around the world for providing excellent education and offering plenty of courses. The German higher education system is well known for high standards and enjoys a good reputation. Zero to low tuition fees at public universities coupled with an excellent reputation for offering world-leading technical degrees, has made Germany one of the most popular study abroad destinations among students from around the world. In this blog we help you  understand all about the education system in Germany including types of universities, programs, requirements, fees and much more. 

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
            <ImageGrid Img1={Img3} Img2={Img4}/>
        </div>
    </div>
</section>
<section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6  md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">UNDERSTANDING YOUR OPTIONS </h2>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        Are you planning to come to Germany before, during or after your studies? You can choose between different options: for example, a language course, an exchange semester at a German higher education institution, or an internship at an exciting company. Another alternative is to make Germany your home for several years by deciding on a complete degree course or a PhD.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>• The Baccalauréat Program - </span> German higher education institutions run a variety of short-term courses in the summer and winter academic breaks. Specialist and language classes can deepen your knowledge, provide opportunities to meet others and are a lot of fun.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>• Exchange Semester - </span> An exchange semester will allow you to get to know a new culture and improve your language abilities while continuing your studies.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>• Internship - </span> Internships give you first experiences in the working world. There are many companies in Germany that offer internship opportunities. continuing your studies.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>• Full Degree - </span> It’s worth doing some research. German higher education institutions offer a wide range of courses ending in internationally renowned degrees.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>• Doctorate - </span> Germany is a popular host country for doctoral candidates from all over the world. The research landscape is excellent.
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

export default Germany;