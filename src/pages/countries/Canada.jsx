import React from 'react';
import Information from '../../components/Information';
import Footer from '../../components/Footer';

const QuickFacts = [
    'Canada Is a Wonderful Place to Live and Study. Since 2004, the United Nations has regularly ranked Canada highly in its Quality of Life Index',
    'Canadian Education Is World Class. Canada is also ranked #2 by the Organization for Economic Cooperation and Development (OECD) for higher education achievement.',
    'Canada Is Multicultural and Open to the World. Canada is officially bilingual (English and French), and across the country, more than 200 languages are spoken',
    'Canadian universities are globally competitive, have a strong record of research excellence, and offer high quality education.',
    'Canada Is a Highly Competitive Economy. Canada has one of the world’s most stable economies.',
    'Canada Is a Major Player in Collaborative Research and Development ',
    'Canada is now in fourth place globally as a receiver of post-secondary international students after the US, UK, and China (surpassing Australia and France).',
    'Canada’s system of university quality assurance is multi-layered, comprehensive, and rigorous, ensuring high-quality education across all Canadian universities.'

];

const country = 'CANADA';

function Canada(props) {
    const largeContent = <>`
    <div class='flex gap-6 py-4 flex-col lg:flex-row lg:items-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Canada is a land of rich diversity, encompassing urban sophistication and abundant nature and wildlife. It is safe yet exciting; stable yet filled with adventure. It features cutting-edge technology, inspiring cultural icons, and a vibrant society that is open to everyone. Canadians tend to be modern, welcoming, and open-minded. Across Canada are examples of excellence, innovation, and beauty, all of which—along with top-notch educational institutions—make Canada one of the leading study abroad destinations in the world.

            </p>
            {/* <!-- Other paragraphs --> */}
        </div>
        <img src='' alt="France" className='object-contain lg:max-w-lg rounded-lg' />
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
        <p class="mt-4 text-base leading-relaxed text-gray-600"> 
        •	Canada offers a variety of university settings, depending on the student’s personality and interests. If the student is looking for a campus with large research facilities in a buzzing urban centre, it’s here. If they prefer a small liberal arts institution in a quiet rural setting, this is also an option. Canada also has medium-sized comprehensive institutions that will range from about 1,000 to 25,000 students—these types of universities are located in a variety of urban centres such as Halifax, Sherbrooke, Kingston, Peterborough, Thunder Bay, Saskatoon, and Victoria.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600">
        •	Canada’s universities grant a full range of degrees, from three- to four-year bachelor’s degrees, to master’s degrees and doctorates (PhD). Other options include professional degrees in medicine, law, architecture, and dentistry to name a few, as well as certificates, diplomas, and shorter career-focused programs.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600">
        •	Many universities offer full-time and part-time enrollment options as well as co-operative education, distance learning, and continuing education. 
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600">
        •	There is online and distance education in Canada: International students who want a Canadian education but cannot, for whatever reason, study abroad, may be very interested in online learning. Most universities and colleges across Canada have dramatically expanded their online and hybrid study options in recent years, and students will find a wide range of programmes available.
        </p>
        <p class="mt-4 text-base leading-relaxed text-gray-600">
        •	There are many excellent Canadian language programs to help international students with language proficiency and enable them to be accepted into post-secondary studies. A separate section in this course is devoted to language programs.
        </p>
        
            </div>

          
        </div>
    </div>
</section>
    `</>
    return (
        <div className=''>
            <Information content={largeContent}/>
            <Footer/>
        </div>
    );
}

export default Canada;