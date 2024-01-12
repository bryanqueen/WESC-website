import {
    Australia,
    Canada,
    Cyprus,
    France,
    Germany,
    Ireland,
    NZealnd,
    UK,
    USA,
    Netherlands
} from '../assets/Flags'


const Countries = [
    {
        name: 'United Kingdom',
        description: '',
        flag: UK
    },
    {
        name: 'USA',
        description: '',
        flag: USA
    },
    {
        name: 'Canada',
        description: 'Canada is a land of rich diversity, encompassing urban sophistication and abundant nature and wildlife. It is safe yet exciting; stable yet filled with adventure. It features cutting-edge technology, inspiring cultural icons, and a vibrant society that is open to everyone.',
        flag: Canada
    },
    {
        name: 'Ireland',
        description: '',
        flag: Ireland
    },
    {
        name: 'Australia',
        description: '',
        flag: Australia
    },
    {
        name: 'France',
        description: '',
        flag: France
    },
    {
        name: 'Netherlands',
        description: '',
        flag: Netherlands
        
    },
    {
        name: 'Cyprus',
        description: '',
        flag: Cyprus
    },
    {
        name: 'Germany',
        description: '',
        flag: Germany
    },
    {
        name: 'New Zealand',
        description: '',
        flag: NZealnd
    },
    
]

function OurMarket() {
  
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Our Market</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Countries.map((country, idx) => (
            <div key={idx} className="overflow-hidden bg-secondary rounded shadow">
                <div className="p-8">
                    <div className="flex items-center">
                        {/* <img className="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" /> */}
                        <img src={country.flag} alt="" className='w-14'/>
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">{country.name}</p>
                        </div>
                        {/* <svg className=" w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg> */}
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7 mb-4">{country.description}</p>
                <button className='bg-primary px-4 py-2 font-semibold text-white rounded-lg'>
                    <a href="">Explore</a>
                </button>
                </div>
            </div>
            ))}

        </div>

    </div>
</section>

    );
}

export default OurMarket;