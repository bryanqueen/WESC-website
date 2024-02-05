import Navbar from "../components/Navbar";
import useDocumentTitle from  '@rehooks/document-title';
import ProgramCard from "../components/ProgramCard";

function Programmes(props) {
    useDocumentTitle('Programmes')
    return (
        <div>
            <Navbar/>
            <div className='justify-center px-4 md:px-10 items-center py-6 bg-secondary'>
            <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Programmes</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 py-5">
                <ProgramCard
                    programType='1-Year Post Secondary Certificate'
                    programName='College Certificate - Professional Photography'
                    tuitionFee='13,426'
                    applicationFee='259'
                    duration='8 months'
                    appCode= '232000'
                    location='Manitoba, CAN'
                />
                <ProgramCard
                    programType='1-Year Post Secondary Certificate'
                    programName='College Certificate - Professional Photography'
                    tuitionFee='13,426'
                    applicationFee='259'
                    duration='8 months'
                    appCode= '232000'
                    location='Manitoba, CAN'
                />
                <ProgramCard
                    programType='1-Year Post Secondary Certificate'
                    programName='College Certificate - Professional Photography'
                    tuitionFee='13,426'
                    applicationFee='259'
                    duration='8 months'
                    appCode= '232000'
                    location='Manitoba, CAN'
                />
            </div>
            </div>
        </div>
    );
}

export default Programmes;