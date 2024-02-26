import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const QuickFacts = [
    'University Rankings And Reputation',
    'Wide Range of Courses And Subjects',
    'Scholarship Benefits for International Students',
    'Focus On Research',
    'Working While Studying',
    'Post-Study Work Visa',
    'Land Of Outdoor Activities',
    'Diverse And Vibrant Student Life'
]

const country = 'AUSTRALIA'

function Australia(props) {
    const largeContent = <>
    <div class='flex gap-6 py-4 flex-col lg:flex-row lg:items-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Studying in Australia offers a wealth of opportunities for students from all over the world. From world-class universities, multicultural environment, to beautiful natural landscapes, there's no better time to get that internationally recognized education than now.
Australia has many top-ranked universities in the world. The universities provide quality education along with various scholarships for students to afford the study in the university. The cities in Australia are student-friendly and provide great multicultural diversity. Other than these, there are many benefits of studying in Australia which makes it one of the popular study destinations.

            </p>
            {/* <!-- Other paragraphs --> */}
        </div>
        <img src='' alt="" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
<div class='flex gap-6 flex-col-reverse lg:flex-row items-start'>
    <img src='' alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        The systems of education in Canada are comprehensive and recognized internationally for their high quality. They are understood as “systems” of education because each province and territory has exclusive responsibility for elementary, secondary, and post-secondary education within its borders. There is no national department of education; however, there are national mechanisms to facilitate recognition and transferability of course credits and credentials.
        </p>
        {/* <!-- Other paragraphs --> */}
    </div>
</div>
<section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl mt-10 md:mt-20">
    {/* <div class="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg" alt="" />
    </div> */}

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

            
        </div>
    </div>
</section>
<section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl mt-10">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6  md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">UNDERSTANDING YOUR OPTIONS </h2>
                <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Undergraduate (Bachelor level)</h3>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Length - Typically 3 years (4 years for a Bachelor Honours degree).
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Semesters - 2, but some providers now offer three trimesters.
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Starts - Usually March, but can vary by course and education provider. Mid-year or second semester starts can also be available.
        </p>
        
        <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Postgraduate</h3>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Length - 1 to 2 years 
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Semesters - 2, but some providers now offer three trimesters.
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Starts - Usually March, but can vary by course and education provider.  
        </p>

        <h3 className='text-xl font-semibold leading-tight text-gray-700 lg:text-3xl py-4'>Doctoral</h3>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Length - 3 years (plus 1 year for review) 
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Semesters - Most Doctoral candidates do not attend classes, but instead have academic supervision throughout the year. 
        </p>
        <p class="mt-2 text-base leading-relaxed text-gray-600"> 
        •	Starts - Start dates are negotiated with a Doctoral degree supervisor who will be providing academic support, counseling, and career advice. This ensures that you have the resources and support you need to succeed in your studies.  
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

export default Australia;