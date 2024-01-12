import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title';
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";

function Services(props) {
    useDocumentTitle('Services');
    const PreOffer = [
        {
            icon: '',
            iconColor: '',
            svgColor: '',
            title: '',
            svgShape: <svg width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>,
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgShape: <svg width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                        </svg>,
            title: '',
            svgColor: '',
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgShape: <svg width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                        </svg>,
            title: '',
            svgColor: '',
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgColor: '',
            title: '',
            svgShape: <svg  width="78" height="78" viewBox="0 0 78 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                        </svg>,
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgColor: '',
            title: '',
            svgShape: <svg width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>,
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgShape: <svg width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                        </svg>,
            title: '',
            svgColor: '',
            text: ''
        },
        {
            icon: '',
            iconColor: '',
            svgShape: <svg width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                        </svg>,
            title: '',
            svgColor: '',
            text: ''
        }
      
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
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 lg:py-14 bg-gray-100 my-10 rounded-lg">
        <h1 className="py-2 text-2xl lg:text-4xl leading-tight font-semibold underline text-gray-700">Pre-Offer Services</h1>
        <div class=" grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-blue-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <FaGraduationCap className="absolute text-red/50 w-9 h-9"/>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>


            

        </div>
    </div>
</section>

        </div>
    );
}

export default Services;