import Navbar from "../components/Navbar";
import { CoverageCard } from "../components/CoverageCard";
import useDocumentTitle from '@rehooks/document-title';
import Australia from '../assets/SideAttractions/Australia1.jpg';
import Canada from '../assets/SideAttractions/Canada1.jpg';
import Cyprus from '../assets/SideAttractions/Cyprus1.jpg';
import France from '../assets/SideAttractions/France1.jpg';
import Germany from '../assets/SideAttractions/Germany1.jpg';
import Ireland from '../assets/SideAttractions/Ireland1.jpg';
import Netherlands from '../assets/SideAttractions/Netherlands1.jpg';
import NZealand from '../assets/SideAttractions/NZealand1.jpg';
import UK from '../assets/SideAttractions/Uk1.jpg';
import US from '../assets/SideAttractions/US1.jpg';

const Countries = [
    {
        name: 'Australia',
        img: Australia,
        path: '/australia'
    },
    {
        name: 'Canada',
        img: Canada,
        path: '/canada'
    },
    {
        name: 'Cyprus',
        img: Cyprus,
        path: '/cyprus'
    },
    {
        name: 'France',
        img: France,
        path: '/france'
    },
    {
        name: 'Germany',
        img: Germany,
        path: '/germany'
    },
    {
        name: 'Ireland',
        img: Ireland,
        path: '/ireland'
    },
    {
        name: 'Netherlands',
        img: Netherlands,
        path: '/netherlands'
    },
    {
        name: 'NewZealand',
        img: NZealand,
        path: '/new-zealand'
    },
    {
        name: 'United Kingdom',
        img: UK,
        path: '/uk'
    },
    {
        name: 'United States',
        img: US,
        path: '/us'
    },
]


function Coverage(props) {
    useDocumentTitle('Our Coverage')
    return (
        <div>
            <Navbar/>
            <div className="justify-center px-4 md:px-10 items-center py-6 bg-secondary">
            <div className='p-4 md:p-6 w-full bg-primary rounded-lg'>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Coverage</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                    {Countries.map((country, idx) => (
                        <CoverageCard key={idx} country={country.name} path={country.path} img={country.img}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Coverage;