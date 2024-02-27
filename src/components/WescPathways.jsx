import React from 'react';
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";
import { IoMdSwitch } from "react-icons/io";
import { FaPersonWalkingArrowRight } from "react-icons/fa6"
import { BsPassport } from "react-icons/bs";
import { GiTallBridge } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import BackgroundImage from '../assets/img15.jpg';
import img22 from '../assets/img22.jpeg';
import img23 from '../assets/img23.jpeg';
import img24 from '../assets/img24.jpeg';
import img25 from '../assets/img25.jpeg';
import img26 from '../assets/img26.jpeg';
import img27 from '../assets/img27.jpeg';


const PathWays =[
    {pathname: 'Study Permit', img: img22},
    {pathname: 'Work Permit', img: img23 },
    {pathname: 'Changing your Study Permit', img: img24 },
    {pathname: 'Changing your Vistor Permit', img: img25},
    {pathname: 'Immigration', img: img26},
    {pathname: 'Transitioning to permanent resident status', img: img27},
    
]

function WescPathways(props) {
    return (
        <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
            <img class="object-cover w-full h-full" src={BackgroundImage} alt="" />
        </div>
        <div class="absolute inset-0 bg-red/50"></div>
        <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">WESC Pathways</h2>
            </div>
    
            <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                {PathWays.map((pathway, idx) => (
                    <div key={idx} className="block rounded-bl-3xl rounded-tr-3xl bg-white overflow-hidden">
                    <img
                      alt=""
                      src={pathway.img}
                      className="h-56 w-full  object-cover sm:h-64 lg:h-72"
                    />
                  
                    <div className="my-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong className="font-medium">{pathway.pathname}</strong>
                    </div>
                  </div>
                ))}
    
            </div>
        </div>
    </section>
    );
}

export default WescPathways;