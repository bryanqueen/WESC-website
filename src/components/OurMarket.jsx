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
        description: 'The United Kingdom is a popular destination for international students due to its high-quality education system, diverse culture, and English language proficiency. It offers a wide range of programs, access to research opportunities, and strong academic networks.',
        flag: UK,
        path: '/coverage/uk'
    },
    {
        name: 'USA',
        description: 'The United States of America, or the USA, has emerged as a popular hotspot among students worldwide for studying abroad. With numerous top-ranking Universities, the country hosts over a million international students yearly for their study abroad in US college plans.',
        flag: USA,
        path: '/coverage/usa'
    },
    {
        name: 'Canada',
        description: 'Canada is a land of rich diversity, encompassing urban sophistication and abundant nature and wildlife. It is safe yet exciting; stable yet filled with adventure. It features cutting-edge technology, inspiring cultural icons, and a vibrant society that is open to everyone.',
        flag: Canada,
        path: '/coverage/canada'
    },
    {
        name: 'Ireland',
        description: 'Ireland has one of the best education systems in the world, renowned internationally for academic quality. This longstanding reputation for high quality education is built on a strong commitment to excellence',
        flag: Ireland,
        path: '/coverage/ireland'
    },
    {
        name: 'Australia',
        description: "Studying in Australia offers a wealth of opportunities for students from all over the world. From world-class universities, multicultural environment, to beautiful natural landscapes, there's no better time to get that internationally recognized education than now.",
        flag: Australia,
        path: '/coverage/australia'
    },
    {
        name: 'France',
        description: "France is one of the modern countries in the world and is the fourth most popular destination for international students. France is projected to become the world's seventh-largest economy by 2022 and the country’s economy is led by tourism, manufacturing, and pharmaceuticals",
        flag: France,
        path: '/coverage/france'
    },
    {
        name: 'Netherlands',
        description: 'Netherland or Holland? Whichever name you use, one thing is sure; it is a place of opportunities. With over 170 nationalities, it is a very multicultural society. Over 122,000 foreign students study here each year.',
        flag: Netherlands,
        path: '/coverage/netherlands'
        
    },
    {
        name: 'Cyprus',
        description: 'Studying in Cyprus may be interesting for many students, as in addition to the well-ranked universities in the country, the cost of studying in Cyprus is also very reasonable.',
        flag: Cyprus,
        path: '/coverage/cyprus'

    },
    {
        name: 'Germany',
        description: 'Germany is one of the most industrialized countries in the world. A global forerunner in industry and technology, Germany is a highly developed country with an excellent standard of living and a social market economy widely considered to be one of the most efficient in the world. ',
        flag: Germany,
        path: '/coverage/germany'
    },
    {
        name: 'New Zealand',
        description: "New Zealand's higher education system offers a wide range of programmes and education providers to choose from, in any region of the country.  Qualifications gained in New Zealand are highly sought after by employers and other education providers around the world",
        flag: NZealnd,
        path: '/coverage/new-zealand'
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
                        <img src={country.flag} alt="" className='w-14'/>
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">{country.name}</p>
                        </div>
                        
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7 mb-4">{country.description}</p>
                <button className='bg-primary px-4 py-2 font-semibold text-white rounded-lg'>
                    <a href={country.path}>Explore</a>
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