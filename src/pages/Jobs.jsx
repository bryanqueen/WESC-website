import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from '../assets/img13.jpg'
import useDocumentTitle from '@rehooks/document-title';

function Jobs(props) {
    useDocumentTitle('Jobs')
    return (
        <div>
            <Navbar/>
            <div className="justify-center px-4 md:px-10 items-center py-6 bg-secondary min-h-screen">
                <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Jobs</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 justify-center items-center py-3  ">
                    <div className="gap-6 flex flex-col" >
                        <p className="text-3xl font-bold leading-tight max-w-xl text-gray-600 sm:text-4xl lg:text-5xl py-6">
                            Sign Up as a WESC agent today and earn commissions from your referrals.....
                        </p>
                        <a href="https://forms.gle/9JgbmfnbdhsE8N5v6" className='px-4 py-2 bg-orange w-full lg:w-72 text-xl font-bold text-gray-800 hover:bg-orange/80 items-center flex justify-center rounded-md'>
                        Become an Agent
                    </a>
                    </div>
                    <img src={Img} alt="yo" className="object-contain lg:max-w-lg rounded-lg" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Jobs;