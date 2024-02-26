import React from 'react';
import Information from '../../components/Information';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EducationLevels = [
    {
        img: '',
        title: 'Primary Education',
        text: 'The primary education system in Ireland is based on the National Education System, which the Department of Education and Skills oversees.Primary education is compulsory for children aged 4-12 and is divided into two stages: junior and senior.',
       
    },
    {
        img: '',
        title: 'Secondary Education',
        text: 'Secondary education in Ireland is compulsory from the ages of 14 to 18 and is divided into two levels: The junior cycle and the senior cycle, which lasts for two years.'
    },
    {
        img: '',
        title: 'Tertiary Education',
        text: 'The Irish tertiary education system comprises universities, technology institutes, and private colleges. All of these institutions offer a variety of undergraduate and postgraduate degrees, diplomas and certificate programs.'
    },

]

const country = 'IRELAND'
function Ireland(props) {
    const largeContent = <>
    <div class='flex gap-6 py-4 flex-col lg:flex-row lg:items-center'>
        <div class=''>
            <h2 class='text-lg md:text-2xl font-medium'>WHY {country}?</h2>
            <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Ireland has one of the best education systems in the world, renowned internationally for academic quality. This longstanding reputation for high quality education is built on a strong commitment to excellence:
Ireland offers the warmest of welcomes to students from all over the world. With one of the best education systems in the world, offering over 5,000 programmes, all internationally recognised and quality assured. The only English speaking country in the Eurozone, Ireland is globally connected and home to many of the worlds’ top companies. You will be able to work part time, if you want to, and avail of a 12 month stay back option – providing you career enhancing opportunities and differentiation for the future.

            </p>
            {/* <!-- Other paragraphs --> */}
        </div>
        <img src='' alt="" className='object-contain lg:max-w-lg rounded-lg' />
    </div>
<div class='flex gap-6 flex-col-reverse lg:flex-row items-start'>
    <img src='' alt="" className='object-contain lg:max-w-lg rounded-lg' />
    <div>
        <h2 class='text-lg md:text-2xl font-medium'>{country} SYSTEM OF EDUCATION</h2>
        <p class='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
        With a long history of providing quality education, Ireland has  an educational system that is both challenging and supportive of the individual needs of its students.
Ireland offers various educational opportunities, from early childhood learning to secondary and tertiary education.
The Ireland education system is one of the most advanced and comprehensive in the world. It is divided into primary, secondary and tertiary education, with each level offering different types of educational opportunities.developed
        </p>
        {/* <!-- Other paragraphs --> */}
    </div>
</div>
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 lg:py-14 bg-gray-100 my-10 rounded-lg">
    <h1 className="py-2 text-2xl lg:text-4xl leading-tight font-semibold text-gray-700">Educational Levels</h1>

    <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
        {EducationLevels.map((level, idx) => (
            <div key={idx} class="md:px-4 lg:px-10">
                <img class="rotate-1" src={level.img} alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">{level.title}</h3>
                <p class="mt-4 text-base text-gray-600">{level.text}</p>
            </div>
        ))}
    </div>
    </div>
<section class="py-10 bg-gray-200 sm:py-16 lg:py-24 my-6 rounded-xl">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6  md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">REQUIREMENTS FOR STUDYING IN {country} </h2>
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
    </>
    return (
        <div>
            <Navbar/>
            <Information content={largeContent}/>
            <Footer/>
        </div>
    );
}

export default Ireland;