import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
import { HiMenuAlt1 } from "react-icons/hi";
import {BiX} from 'react-icons/bi';
import { useLocation } from 'react-router-dom'

const NavItems = [
    {name: 'Blogs', path: '/blogs'},
    {name: 'About', path: '/about-us'},
    {name: 'Our Services', path: '/services'},
    {name: 'Our Coverage', path: '/coverage'},
    // {name: 'Programmes', path: '/programmes'},
    {name: 'Jobs', path: '/jobs'},
    {name: 'Apply', path: '/apply'}
]

function Navbar(props) {
    const location = useLocation();
    const [activeNavItem, setActiveNavItem] = useState('');
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    useEffect(()=>{
        const currentLocation = location.pathname
        setActiveNavItem(currentLocation)
    },[location.pathname])
    return (
        <nav className=" w-full bg-primary px-4 lg:px-8 py-4 ">
        <div className="mx-auto flex items-center justify-between">
            
            <a href="/" className="">
                <img src={Logo} alt="" className='w-32 lg:w-44' />
            </a>

           
            <ul className="md:flex md:gap-4 lg:gap-8 hidden  p-4 rounded-r-xl  ">
                {NavItems.map((item, idx)=> (
                  <li key={idx} className={`text-white md:text-base lg:text-lg font-semibold hover:underline hover:text-orange `}>
                    <a href={item.path} className={`${item.path === activeNavItem ? 'text-orange' : '' }`}>{item.name}</a>
                  </li>
                ))}
            </ul>

            <div className={`md:hidden block  p-2 rounded-full bg-secondary ${isToggleOpen ? 'visible opacity-100' : ''}`} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                {isToggleOpen ? <BiX className='h-6 w-6 text-primary'/> : <HiMenuAlt1 className='h-6 w-6 text-primary'/> }
            </div>
        <ul className={`absolute left-0 top-0 w-full min-h-screen justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-primary flex flex-col gap-4 px-8  font-medium transition-[opacity,visibility] duration-300 ${isToggleOpen ? 'visible opacity-100 backdrop-blur-sm ' : 'invisible opacity-0'}`}>
            <div className='items-end flex'>
                <div className={`absolute right-4 top-4 md:hidden flex justify-start p-2 w-10 rounded-full bg-secondary ${isToggleOpen ? 'visible opacity-100' : ''}`} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                {isToggleOpen ? <BiX className='h-6 w-6 text-primary'/> : <HiMenuAlt1 className='h-6 w-6 text-primary'/> }
                </div>
            </div>
                {NavItems.map((item, idx) => (
                    <li key={idx} className='text-2xl text-secondary hover:text-orange '>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;