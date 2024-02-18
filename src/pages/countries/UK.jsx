import React from 'react';
import Information from '../../components/Information';
import Footer from '../../components/Footer';
import Img1 from '../../assets/SideAttractions/Uk1.jpg';
import Img2 from '../../assets/SideAttractions/UK2.jpg';

const QuickFacts = [
    'High Quality Education',
    'International Students Are Welcomed',
    'Variety of Courses',
    'High Standards of Teaching',
    'Shorter Courses',
    'Scholarships and Funding',
    'The UK Is An Interesting Place To Live',
    'Work While You Study',
    'High Rate of Employability',
    'Develop Excellent Language Skills'
]

const country = 'UNITED KINGDOM'

function UK(props) {
    const largeContent = <>
        <div class='flex gap-6 py-4 flex-col lg:flex-row lg:items-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            The United Kingdom is a popular destination for international students due to its high-quality education system, diverse culture, and English language proficiency. It offers a wide range of programs, access to research opportunities, and strong academic networks. UK higher education and qualifications have a remarkable international reputation, and a UK undergraduate or postgraduate degree is globally recognised by international education, top employers and government bodies, creating a huge number of future opportunites for you at companies all over the world. UK is home to some of the world's greatest universities and its institutions consistently top global rankings. The United Kingdom (UK) is different from other countries in several ways. One unique aspect is its constitutional monarchy, with a parliamentary democracy. The UK also consists of four constituent countries: England, Scotland, Wales, and Northern Ireland, each with its own distinct culture and identity.
            </p>
            {/* <!-- Other paragraphs --> */}
        </div>
        <img src={Img1} alt="France" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
<div class='flex gap-6 flex-col-reverse lg:flex-row items-start'>
    <img src={Img2} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>UK SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        Across the UK there are five stages of education: early years, primary, secondary, Further Education (FE) and Higher Education (HE). Education is compulsory for all children between the ages of 5 (4 in Northern Ireland) and 16. FE is not compulsory and covers non-advanced education which can be taken at further (including tertiary) education colleges and HE institutions (HEIs). The fifth stage, HE, is study beyond GCE A levels and their equivalent which, for most full-time students, takes place in universities and other HEIs and colleges. 

        </p>
        <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        Some universities and other higher education providers are ranked top among universities worldwide. The UK capital city, London, not by accident, is considered to be the world’s capital city of higher education. With its four universities ranked in the world’s top ten, London has the highest number of worldwide-ranked universities per city. By definition, UK higher education is the level of education that follows secondary school at the hierarchy of the educational system in the UK. When high school is over, Britons have to sit in a standard examination, making them eligible not to continue their education at a higher level.
        </p>
        {/* <!-- Other paragraphs --> */}
    </div>
</div>
<section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl">
    {/* <div class="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg" alt="" />
    </div> */}

    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-end grid-cols-1 gap-y-10  md:gap-x-20">
            <div>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">HERE ARE SOME QUICK FACTS ABOUT <span className='text-orange'>{country}</span></h2>
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
                {/* <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Higher education (ages 18+)</h3> */}
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        New Zealand has eight state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs) which have been unified into the Te Pūkenga- New Zealand Institute of Skills and Technology (NZIST), and about 550 Private Training Establishments (PTEs), which include English language schools.
        <ul className='p-6 md:pl-12 text-gray-800 font-medium flex flex-col gap-4'>
            <li>
                (i)	Postgraduate courses leading to higher degrees, diplomas and certificates (including Doctorate, Masters (research and taught), Postgraduate diplomas and certificates as well as postgraduate certificates of education (PGCE) and professional qualifications) which usually require a first degree as entry qualification. 
            </li>

            <li>
            (ii)  Undergraduate courses which include first degrees (honours and ordinary), first degrees with qualified teacher status, enhanced first degrees, first degrees obtained concurrently with a diploma, and intercalated first degrees (where first degree students, usually in medicine, dentistry or veterinary medicine, interrupt their studies to complete a one-year course of advanced studies in a related topic). 
            </li>

            <li>
            (iii) Other undergraduate courses which include all other higher education courses, for example SVQ or NVQ: Level 5, Diploma (HNC/D level for diploma and degree holders), HND (or equivalent), HNC (or equivalent) and SVQ or NVQ: Level 4 and Diplomas in HE.
            </li>
        </ul>
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

export default UK;
