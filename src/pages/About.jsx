import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useDocumentTitle from '@rehooks/document-title';
import Img1 from '../assets/img17.jpg';
import Img2 from '../assets/img5.jpg';
import Img3 from '../assets/img14.jpg'
import Olawale from '../assets/Teams/Olawale.jpg';
import Ese from '../assets/Teams/Ese.jpg';
import Charles from '../assets/Teams/Charles.jpg';
import Daniel from '../assets/Teams/Daniel.jpg';
import Jesupelumi from '../assets/Teams/Jesupelumi.jpg';
import Joseph from '../assets/Teams/Joseph.jpeg';
import Victoria from '../assets/Teams/Victoria.jpg';
import Precious from '../assets/Teams/Precious.jpg'



function About(props) {
    useDocumentTitle('About Us')
    const Missions = [
        'We advance best practices in enrollment management through independent consulting and staffing services.',
        
        'We believe that qualitative higher education is the game changer for economic development and sustainability and we are dedicated to expanding access and equity in admissions and financial aid to support inclusiveness.',

        'Our approaches are rooted in sustainable mission fulfillment, evidence-based decision making, and goal-oriented results.'
    ]

    const Teams = [
        {name: 'Olawale Okupe', position: 'CEO', image: Olawale},
        {name: 'Ese Sona', position: 'Chief Admission Officer', image: Ese},
        {name: 'Oluwayomi Victoria Aduragbemi', position: 'Recruitment Officer', image: Victoria},
        {name: 'Jesupelumi Ogunmola', position: 'Customer Experience Officer', image: Jesupelumi},
        {name: 'Aderibigbe Charles ', position: 'Recruitment Officer', image: Charles},
        {name: 'Precious K. Enubuzor', position: 'Recruitment Officer', image: Precious},
        {name: 'Imhanbor Joseph', position: 'Social Media Manager/Ro', image: Joseph},
        {name: 'Umeh Daniel', position: 'Software Engineer', image: Daniel}
    ]
    return (
        <div className=''>
            <Navbar/>
           <div className='justify-center px-4 md:px-10 items-center py-6 bg-secondary'>
                <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">About Us</h2>
                </div>

                <div className='flex gap-6 py-4 flex-col lg:flex-row justify-center items-center '>
                    <div className=''>
                <h2 className='text-lg md:text-2xl font-medium'>About WESC</h2>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    WESC is short for World Education Service Centre. WESC is a leading technology driven education service provider and Overseas Education Consultant for over 12 years. We are in the business of helping Institutions, Consultants and Students to meet their respective international goals and career aspirations. At WESC, we offer a free advisory and support service for international students who wish to pursue higher education in the diaspora.
                    </p>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    We are known as a reliable and reputable education-based consultancy firm, specialising in helping students to gain entrance into their dream institutions anywhere around the globe. 
                    </p>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    Our decades of experience and knowledge of the international student recruitment market makes us the go-to advisory service provider for many clients across the world looking to study in Canada, USA, United States, Australia, Ireland, Germany, France, Singapore, Netherlands, Cyprus, New Zealand, Ukraine and Others.
                    </p>
                </div>
                <img src={Img1} alt="Yo Man" className='object-contain lg:max-w-lg rounded-lg' />
                </div>
                <div className='flex gap-6 flex-col-reverse lg:flex-row items-center justify-center'>
                    <img src={Img2} alt="Yo bro" className='object-contain lg:max-w-lg rounded-lg' />
                <div>
                    <p className='max-w-lg mx-auto mt-4 text-lg font-semibold leading-relaxed text-gray-900'>
                    Proudly operating at our permanent site in Abijo, Ibeju-Lekki LGA, Lagos. The quality of our partnerships have continued to help us expand our network of education institutes, students and alumni.
                    </p>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    Our growth enables us to offer a unique service to each of our students and establish further partnerships with prestigious universities, polytechnics, colleges and high schools across the world– including some of the best universities in the world for international students.
                    </p>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    WESC has grown to be one of its kind within the international student recruitment space and proudly partnered with 2500+ public and private colleges, polytechnics and universities in all the regions we represent, 
                    </p>
                    <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                    To understand more on how our services helps meet your requirements, you can book a consultation session with one of our trained and Certified Relationship Managers. Your Specialist Relationship Manager will provide recommendations that will help you in making a decision based on realistic and available options.
                    </p>
                </div>
                </div>
                {/* Motto Section */}
                <div className='flex flex-col py-6'>
                <h2 className='text-lg md:text-2xl font-medium'>Our motto</h2>
                <p className='text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl py-6'>
                    Inspiring your career and traveling dream. 
                </p>
                </div>
                
                {/* Our Mission */}
                <section class="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 rounded-xl">
    <div class="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg" alt="" />
    </div>

    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Mission</h2>
                <ul class="mt-12 space-y-4 md:mt-20">
                    {Missions.map((mission, idx) => (
                         <li key={idx} class="flex items-start space-x-3">
                         <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-orange rounded-full">
                             <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                             </svg>
                         </div>
                         <p class=" text-base leading-relaxed text-blue-100">{mission}</p>
                     </li>
                    ))}

                </ul>
            </div>
            <div className='p-3 lg:p-6 bg-orange rounded-lg '> 
                <img src={Img3} alt="" className='rounded-lg' />
            </div>
            
        </div>
    </div>
</section>
            {/* Why Choose WESC */}

            <section class=" my-6 py-10 bg-white sm:py-16 lg:py-24 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
                <div class="relative max-w-xs mb-12">
                    <img class="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" />

                    <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Why Choose WESC?</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600">
                As the world’s leading premium international student recruitment organisation, we make every moment of your journey with us a worthwhile. Our strong international links and partnerships allow us to make seamless what seems to be difficult for others to achieve within short possible time with cutting-edge technology and excellent workforce. We inspire our students to achieve more than they ever thought possible with our in-depth knowledge and expertise of international student recruitment and unmatched understanding of the various levels of international student support.
                </p>
            </div>
        </div>
    </div>
</section>

                {/* Our Vision */}
                <div className='flex flex-col py-6'>
                <h2 className='text-lg md:text-2xl font-medium'>Our Vision</h2>
                <p className='text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl py-6'>
                To help millions of students across the world to have access to qualitative education for global relevance and competitiveness. 
                </p>
                </div>

                {/* Our Commitment to excellence */}
                <section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Commitment to Excellence</h2>
        <p class="mt-4 text-base leading-relaxed text-gray-600">At WESC, we recognize that the work that we do directly or indirectly affects or influences others. Therefore, we are committed to giving you an experience that is rear to find in the Industry we represent as key stakeholder.
                We regularly examine our partnerships to ensure that we have a positive impact on the communities we serve. As we work with our clients to help them reach their goals, we prioritize creating and fostering an inclusive and safe educational opportunities for all and Sundry.
        </p>
            </div>

            <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                    <img class="ml-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg" alt="" />

                    <img class="absolute -top-4 -left-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

                    <div class="absolute -bottom-10 -left-16">
                        <div class="bg-orange">
                            <div class="px-8 py-10">
                                <span class="block text-4xl font-bold text-black lg:text-5xl"> WESC </span>
                                <span class="block mt-2 text-base leading-tight text-black font-medium"> Excellence<br />Postive Impact  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            
                    {/* Our Team */}
                    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Team</h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">At WESC, we are blessed with some of the most beautiful beings on earth. These individuals provide you with all the necessary up to date resources and assistant to help you find the right university, share with you available scholarships' opportunities and complete all the tasks required to ensure that your transition process is stress-free.</p>
        </div>

        <div class="grid grid-cols-1.5 md:grid-cols-2 mt-8  justify-center sm:mt-16 lg:mt-20  gap-y-8 lg:grid-cols-3 gap-x-4 items-center">
            {Teams.map((member, idx) => (
            <div className='items-center justify-center flex flex-col gap-3' key={idx}>
                <img class="object-cover rounded-lg w-36 h-36" src={member.image} alt="Team Member" />
                <p class="text-lg font-semibold leading-tight text-black">{member.name}</p>
                <p class=" text-base leading-tight text-gray-600">{member.position}</p>
            </div>
            ))}

           
        </div>
    </div>
</section>


           </div>
           <Footer/>
        </div>
    );
}

export default About;