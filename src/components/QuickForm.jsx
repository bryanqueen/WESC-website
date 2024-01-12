import React from 'react';

const MigrantOptions = [
    {option: 'to IMMIGRATE', value: ''},
    {option: 'a WORK PERMIT', value: ''},
    {option: 'to VISIT A FRIEND OR ATTEND A CONFERENCE', value: ''},
    {option: 'to STUDY', value: ''},
    {option: 'to STUDY & WORK', value: ''},
    {option: 'a SCHOLARSHIP', value: ''},
    {option: 'a SHORT-TIME COURSE', value: ''}
]

function QuickForm(props) {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                    <h3 className="text-3xl font-semibold text-center text-gray-900">WESC Quick Form</h3>

                    <form className="mt-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Your name </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative">
                                    <input type="email" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Whatsapp Contact </label>
                                <div className="mt-2.5 relative">
                                    <input type="tel" name="" id="" placeholder="Enter your whatsapp contact" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Location </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Enter your location" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="" className="text-base font-medium text-gray-900">Explore your options</label>
                                <div className='mt-2.5 relative'>
                                    <select name="" id="" className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 '>
                                        {MigrantOptions.map((option, idx) => (
                                        <option key={idx} value={option.value}>I want {option.option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none bg-primary focus:bg-blue-700">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    );
}

export default QuickForm;