import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useDocumentTitle from "@rehooks/document-title";
import Img1 from '../assets/img12.jpg';
import Img2 from '../assets/CountryStuStock/Img5.jpg';
import { FaCircle } from "react-icons/fa6";

const Procedures = [
    'Fill the inquiry form.',
    'Supply your documents to admission@wescng.com.',
    'Upon completion of search, you will be required to select your choice program or preferred program(s) that match your budget. Note that you can apply to many schools to increase your chances of being selected.',
    'After that, pay your application fee(s) that is attached to the program(s) you have chosen for us to commence the processing.',
    'Once application is submitted, you will receive a notification.',
    'As soon as Conditional offer or admission letter is out, pay your tuition deposit, to initiate your visa processing. '
]

export const Apply = () => {
    useDocumentTitle('Apply Now')
    return (
        <div>
            <Navbar/>
            <div className="justify-center px-4 md:px-10 items-center py-6 bg-secondary">
            <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Apply for a program</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center py-4 gap-4">
            <p className="max-w-lg mt-4 text-base leading-relaxed text-gray-600">
                Now that it is your turn to have the WESC experiecnce, carefully go through the procedures below to have understanding on how we work. 
                <h2 className="text-lg font-semibold py-2 text-gray-700 underline">Procedures For WESC Student Admission</h2>
                <ul>
                    {Procedures.map((step, idx) => (
                    <li key={idx} className="flex gap-2 items-center pb-2">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-gray-700 rounded-full">
                             <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                             </svg>
                         </div>
                         <p className="font-medium text-gray-500">{step}</p>
                    </li>
                    ))}
                </ul>
            </p>
            
            <img src={Img1} alt="" loading="lazy" className="object-contain lg:max-w-lg rounded-lg" />
            </div>
            <div class='flex gap-6 flex-col-reverse lg:flex-row py-4 justify-center '>
                <img src={Img2} alt="France Flag" className='object-contain lg:max-w-lg rounded-lg' />
                <div>
                    <h2 class='text-lg font-medium text-gray-700 py-2 underline'>Note the following</h2>
                    <ul className="border p-4 border-orange rounded-lg lg:max-w-lg text-gray-600 text-base leading-relaxed">
                        <li className="flex gap-1.5 items-start py-2 ">
                            <FaCircle className="text-orange "/>
                            <p>That Visa processing attracts professional fee which must be paid before proceedings can commence.</p>
                        </li>
                        <li className="flex gap-1.5 items-start py-2 ">
                            <FaCircle className="text-orange "/>
                            <p>Visa fee  (payable to the embassy) vary to country. Your destination country will determine the visa fee you will pay.</p>
                        </li>
                        <li className="flex gap-1.5 items-start py-2 ">
                            <FaCircle className="text-orange h-6 w-6 "/>
                            <p>Failure to do the above will attract a processing fee to cover for the resources used throughout the process (Only applicable during promotional period)</p>
                        </li>
                    </ul>
                    <div className="py-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScuYgrKK4rC46JKBAt77BeCwVXcD4AMSBshV3UFSiQnQBh6IA/viewform?usp=sf_link" className='px-4 py-2 bg-orange w-full text-xl font-bold text-gray-800 hover:bg-orange/80 items-center flex justify-center rounded-md'>
                        Apply Now
                    </a>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}