import React from 'react';
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";
import { IoMdSwitch } from "react-icons/io";
import { FaPersonWalkingArrowRight } from "react-icons/fa6"
import { BsPassport } from "react-icons/bs";
import { GiTallBridge } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

const iconStyle1 = 'w-10 h-10 text-orange';
const iconStyle2 = 'w-10 h-10 text-red'

const PathWays =[
    {pathname: 'Study Permit', icon: <TbSchool className={iconStyle1}/>},
    {pathname: 'Work Permit', icon: <GoBriefcase className={iconStyle2}/>},
    {pathname: 'Changing your Study Permit', icon: <IoMdSwitch className={iconStyle1}/>},
    {pathname: 'Changing your Vistor Permit', icon: <FaPersonWalkingArrowRight className={iconStyle2}/>},
    {pathname: 'Immigration', icon: <BsPassport className={iconStyle1}/>},
    {pathname: 'Transitioning to permanent resident status', icon: <GiTallBridge className={iconStyle2}/>},
    
]

function WescPathways(props) {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">WESC Pathways</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Depending on your desire and goal, this form enables WESC to assist you with any of the following:</p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
            {PathWays.map((item, idx) => (
            <li key={idx} className="relative flex items-center">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow ">
                   {item.icon}
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">{item.pathname}</h3>
                </div>
            </li>
            ))}
            <li className="relative flex items-center">
                {/* <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div> */}

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow ">
                    <MdFamilyRestroom className='w-10 h-10 text-orange'/>
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">Bringing your family</h3>
                </div>
            </li>
        </ul>
    </div>
</section>

    );
}

export default WescPathways;