import Navbar from "../components/Navbar";
import useDocumentTitle from "@rehooks/document-title";
export const Apply = () => {
    useDocumentTitle('Apply Now')
    return (
        <div>
            <Navbar/>
            <div className="justify-center px-4 md:px-10 items-center py-6 bg-secondary">
            <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Apply for a program</h2>
            </div>
            <div className="flex flex-col md:flex-row">
            <p className="max-w-lg mt-4 text-base leading-relaxed text-gray-600">
                Now that it is your turn to have the WESC experiecnce, carefully go through the procedures below to have understanding on how we work. 
            </p>
            
            <img src="" alt="yO" />
            </div>
            </div>
        </div>
    )
}