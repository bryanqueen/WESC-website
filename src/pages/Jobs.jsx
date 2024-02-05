import Navbar from "../components/Navbar";
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
            </div>
        </div>
    );
}

export default Jobs;