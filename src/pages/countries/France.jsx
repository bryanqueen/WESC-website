import React from 'react';
import Information from '../../components/Information';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/France1.jpg';
import Img2 from '../../assets/SideAttractions/France2.jpg';
const QuickFacts = [
    'France is a world-leader with a strong economy',
    'France is home to leading international corporations: Airbus, Total, Orange, LVMH, L’Oréal, Danone',
    'Welcoming place for Young talent in innovation and entrepreneurship sectors',
    'Paris is among the Top 10 Student friendly cities',
    'Economical tuition fee in France starting at 5000 EUR',
    'High Quality education adapted to students needs',
    'Outstanding research and development opportunities',
    '1500+ English taught programmes',
    'France is an appealing destination for students worldwide',
    '9 out of 10 international students recommend France as a study destination (Baromètre Campus France, 2013)'


]

const country = 'FRANCE'

function France(props) {
    const largeContent =  <>
    <div class='flex gap-6 py-4 flex-col lg:flex-row lg:items-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY ${country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                France is one of the modern countries in the world and is the fourth most popular destination for international students. France is projected to become the world's seventh-largest economy by 2022 and the country’s economy is led by tourism, manufacturing, and pharmaceuticals. The French government has privatized many large companies partially or fully but maintains an evident presence in power, public transport, and defense. World-class infrastructure and communications, an innovative business community, and a modern regulatory system help France to earn high marks for business freedom.
            </p>
            {/* <!-- Other paragraphs --> */}
        </div>
        <img src={Img1} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
<div class='flex gap-6 flex-col-reverse lg:flex-row items-start'>
    <img src={Img2} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>FRANCE SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            French Education system has a strong influence on the Central state in terms of planning as well as funding. Higher education in France is regulated by the Department for National Education. Primary education in France from age three for about twenty years.
        </p>
        {/* <!-- Other paragraphs --> */}
    </div>
</div>
<section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl">
    {/* <div class="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg" alt="" />
    </div> */}

    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">HERE ARE SOME QUICK FACTS ABOUT <span className='text-orange'>{country}</span></h2>
        <div class="grid items-end grid-cols-1 lg:grid-cols-2 gap-y-10  md:gap-x-20">
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
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">UNDERSTANDING YOUR OPTIONS </h2>
                <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Degrees and courses in France</h3>
        <p class="mt-4 text-base leading-relaxed text-gray-600"> <span className='text-lg font-semibold text-gray-800 underline'>The Baccalauréat Program :</span> The academic stream is offered in three concentrations literary (L), economic and social sciences (ES), and scientific (S) and students learn math, science (life and earth sciences or engineering sciences), physics and chemistry, philosophy, languages, civics, social science, and physical education during their final year of study. The technology stream is among the best programs to study in France with concentrations in industrial science and technology, laboratory sciences, health sciences, hotel and tourism, management, music and dance, and environmental science. The vocational stream has concentrations in many different specialties, including sales, accounting, automotive mechanics, and graphic design. It prepares students to enter the job market, but also provides access to higher education.
        </p>
        <p className='mt-4 text-base leading-relaxed text-gray-600'>
<span className='text-lg font-semibold text-gray-800 underline'>Brevet de Technicien Supérieur (BTS) or the Higher Technician’s Certificate :</span>The BTS is a two-year technical degree awarded by the Ministry of Education. Those who have earned a BTS can proceed into the workforce, or use it for access to further study in Bachelors programs in engineering or business.
        </p>
        <p className='mt-4 text-base leading-relaxed text-gray-600'>
        <span className='text-lg font-semibold text-gray-800 underline'>Institut Universitaires de Technologie (IUT) or the University Institutes of Technology :</span> The two-year programs are offered at IUT, culminating in the diplôme universitaire de technologie (DUT).
        </p>
        <p className='mt-4 text-base leading-relaxed text-gray-600'>
        <span className='text-lg font-semibold text-gray-800 underline'>Universities :</span> There are 83 public universities in France, and 80% of the tertiary student population attends these institutions. The L-M-D structure instituted under the Bologna Process created a three-tiered system of education: the Bachelors degree (licence), the Masters degree (master), and the doctorate (doctorat). 
        </p>
            </div>

          
        </div>
    </div>
</section>
    
    </>
    return (
        <div>
           <Information content={largeContent}/>
            <Footer/>
        </div>
    );
}

export default France;