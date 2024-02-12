import HeroImg0 from '../assets/img1.jpg';
import HeroImg1 from '../assets/img9.jpg';
import HeroImg2 from '../assets/img7.jpg';
import HeroImg3 from '../assets/img13.jpg';
import HeroImg4 from '../assets/img3.jpg';
import Logo from '../assets/Logo.png';
import { HiMenuAlt1 } from "react-icons/hi";
import {BiX} from 'react-icons/bi'
import {useState, useEffect} from 'react'

const NavItems = [
    {name: 'Blogs', path: '/blogs'},
    {name: 'About', path: '/about-us'},
    {name: 'Our Services', path: '/services'},
    {name: 'Our Coverage', path: '/coverage'},
    {name: 'Programmes', path: '/programmes'},
    {name: 'Jobs', path: '/jobs'}
]

const data = [
    {img: HeroImg0, text: <><span className='text-orange'>Welcome!</span> We've been waiting for <span className='border-b-4 border-orange'>you</span></>},
    {img: HeroImg1, text: <>Your Journey to a <span className='text-orange'>brighter</span> future starts <span className='border-b-4 border-orange'>here</span></>},
    {img: HeroImg2, text: <>With <span className='text-orange'>WESC</span>, you can never get it <span className='border-b-4 border-orange'>wrong</span></>},
    {img: HeroImg3, text: <>We are with you from <span className='text-orange'>start</span> to <span className='border-b-4 border-orange'>finish</span></>},
    {img: HeroImg4, text: <>Connect with our <span className='text-orange'>counselors</span> today to get <span className='border-b-4 border-orange'>started</span></>}
]
function Hero() {
    const [isToggleOpen,  setIsToggleOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(()=> {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
        }, 5000);

        return () => clearInterval(intervalId)
    }, [])

    const currentData = data[currentIndex]
    // console.log(typeof(currentData))
    return (
        <section className="relative  py-10 overflow-hidden bg-primary sm:py-16 lg:py-24 xl:py-32 min-h-screen">
    <div className="absolute inset-0 ">
        <img className="object-cover lg:object-contain w-full h-full md:object-left md:scale-150 md:origin-top-left" src={currentData.img} alt="" />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-l md:block from-transparent to-primary"></div>

    <div className="absolute inset-0 block bg-primary/50 md:hidden"></div>

               <nav className="absolute z-10 -top-2 w-full bg-transparent px-4 lg:px-8 py-5 ">
        <div className="mx-auto flex items-center justify-between">
            
            <a href="/" className="">
                <img src={Logo} alt="" className='w-32 lg:w-44' />
            </a>

           
            <ul className="md:flex md:gap-4 lg:gap-8 hidden bg-gradient-to-r p-4 rounded-r-xl  from-transparent to-primary">
                {NavItems.map((item)=> (
                  <li className='text-white md:text-base lg:text-lg font-semibold hover:underline hover:text-orange'>
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
            </ul>

            <div className={`md:hidden p-2 rounded-full bg-secondary`} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                {isToggleOpen ? <BiX className='h-6 w-6 text-primary'/> : <HiMenuAlt1 className='h-6 w-6 text-primary'/>}
            </div>
            <ul className={`absolute min-h-screen top-0 left-0 z-[-1] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-primary px-8 flex flex-col gap-4 font-medium transition-[opacity,visibility] duration-300 ${isToggleOpen ? 'visible backdrop-blur-sm opacity-100' : 'invisible opacity-0'}`}>
                {NavItems.map((item) => (
                    <li className='text-2xl text-secondary hover:text-orange'>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    <div className="relative px-4 lg:px-8 max-w-7xl pt-20">
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div>
        <h1 class="mt-20 text-5xl font-bold text-secondary lg:mt-8 xl:text-8xl">{currentData.text}</h1>
            </div>
      
        </div>
    </div>
</section>

    );
}

export default Hero;