import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title';
import Footer from '../components/Footer';
import CounsellingImg from '../assets/img23.jpeg';
import CourseSelection from '../assets/img16.jpg';
import UniversitySelection from '../assets/img27.jpeg';
import Application from '../assets/img25.jpeg';
import EducationSupport from '../assets/img24.jpeg';
import EnglishClasses from '../assets/img30.jpeg';
import ScholarshipAss from '../assets/img20.jpg';
import VisaAss from '../assets/img22.jpeg'
import StudyLoans from '../assets/img11.jpg'
import FlightBooking from '../assets/img12.jpg'
import Accomodation from '../assets/img18.jpg'

function Services(props) {
    useDocumentTitle('Services');
    const PreOffer = [
        {

            title: 'Free Education Counselling',
            text: 'We provide you with free advisory services on what option is best for you for your traveling dream.',
            img: CounsellingImg
        },
        {
            title: 'Course Selection',
            text: 'We provide you with arrays of courses in your chosen field.',
            img: CourseSelection
        },
        {
            title: 'University Selection',
            text: 'We provide you with professional advice on school that matches your expectations and budget.',
            img: UniversitySelection
        },
        {
            title: 'Application',
            text: "We assist you with filling in all the documents you need to apply to choice college or university. All we need from you is to supply us with all required documents pertaining to you chosen destination and we will take up from there! It will surprise you to know that we provide you an offer at no cost.",
            img: Application
        },
        {
            title: 'Education Support Services',
            text: 'Your journey to your dream school is simply not an easy ride as it requires a lot of documentations which sometimes can serve as bottlenecks to many. With us, there is simply no cause for concern.',
            img: EducationSupport
        },
        {

            title: 'Scholarship Assistant',
            text: 'We assist you to secure a student loan once your eligibility is confirmed.',
            img: ScholarshipAss
        },
        { 
            title: 'English Proficiency Classes',
            text: <>Our parent company Pass4sure Concept, provides you with touch-notched and result-oriented educational support services in all international exams. Visit <a href='https://www.pass4sureconcept.com' className='text-primary font-semibold'>www.pass4sureconcept.com</a> for more details.</>,
            img: EnglishClasses
        }
      
    ]

    const PostOffer = [
        {
            title: 'VISA Assistant ( Student, Work and Visitor)',
            text: 'Our certified visa advisors will assist you in applying for your visa.',
            img: VisaAss
        },
        {
            title: 'Study Abroad Loans Assistance',
            text: 'As part of our effort to support inclusiveness, we assist high-flying students with financial constraints to secure a fully-funded student loan that covers both tuition fee and living expenses throughout their programs only in the US and Canada only once their eligibility are confirmed.( Note: Terms and Conditions Apply)',
            img: StudyLoans
        },
        {
            title: 'Flight Booking ',
            text: 'We help to book flight with cheapest fare.',
            img: FlightBooking
        },
        {
            title: 'Accomodation Services',
            text: 'We assist you with finding a home in your preferred location for the duration of your studies.',
            img: Accomodation
        },
    ]
    return (
        <div>
            <Navbar/>
            <section class="justify-center px-4 md:px-10 items-center py-6 bg-secondary">
            <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Services</h2>
                </div>
                <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Our services are divided into two, namely- Pre-Offer Services and Post-Offer Services. For more clarity, check the list below:
                </p>
    <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 lg:py-14 bg-gray-100 my-10 rounded-lg">
        <h1 className="py-2 text-2xl lg:text-4xl leading-tight font-semibold underline text-gray-700">Pre-Offer Services</h1>
        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
        {PreOffer.map((offer, idx) => (
            <div class="md:px-4 lg:px-10 ">
                <img class="rotate-1" src={offer.img} alt="" className=""/>
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">{offer.title}</h3>
                <p class="mt-4 text-base text-gray-600">{offer.text}</p>
            </div>
        ))}
    </div>
    </div>

    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 lg:py-14 bg-gray-100 my-10 rounded-lg">
    <h1 className="py-2 text-2xl lg:text-4xl leading-tight font-semibold underline text-gray-700">Post-Offer Services</h1>

    <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
        {PostOffer.map((offer, idx) => (
            <div class="md:px-4 lg:px-10">
                <img class="rotate-1" src={offer.img} alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">{offer.title}</h3>
                <p class="mt-4 text-base text-gray-600">{offer.text}</p>
            </div>
        ))}
    </div>
    </div>
</section>
<Footer/>
        </div>
    );
}

export default Services;