import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';

const Mykra = () => {
    return (
        <>
        <Navbar/>
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[80vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className='md:flex justify-between mb-4'>
                        <div className='text-xl font-semibold mb-2'>
                            <h1>Your KRA
                            </h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='p-6 shadow-2xl lg:col-span-1 col-span-2 bg-slate-800'>
                            <h2 className='text-white text-2xl font-semibold text-center underline m-3'>Your Designation Levels</h2>

                            <div className='relative my-5'>
                                <div className="absolute top-0 bottom-0 left-4 w-[1px]  bg-gray-400"></div>
                                <div class="ml-2.5 space-y-10 py-6">
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Programmer Trainee</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Associate Programmer</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Programmer</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Programmer Analyst</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-yellow-400 z-10"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full shadow-lg">Senior Programmer Analyst</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Associate Principal Analyst</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 flex flex-wrap text-nowrap overflow-hidden gap-2">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Principal Analyst</span>
                                            
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">Technical Project Manager</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                                        <div class="ml-4 text-nowrap overflow-hidden">
                                            <span class="bg-gray-400 text-white px-3 py-1 rounded-full">BI Architect / Data Architect / Solutions Architect</span>
                                        </div>
                                    </div>
                                    



                                </div>

                            </div>
                            


                            </div>
                            <div className='p-6 shadow-2xl lg:col-span-1 col-span-2 bg-slate-800'>
                            <h2 className='text-white text-2xl font-semibold text-center underline m-3'>KRA</h2>
                            <p className='text-md text-gray-200'>As per your current designation Programmer Analyst your key responsibility areas are:</p>
                            <ul className='space-y-5 list-decimal list-outside px-6 my-4'>
                                
                            <li className='text-md text-gray-200 pl-3 '>Develop high-quality software design and architecture</li>
                            
                                <li className='text-md text-gray-200 pl-3'>Identify, prioritize and execute tasks in the software development life cycle</li>
                                <li className='text-md text-gray-200 pl-3'>Develop tools and applications by producing clean, efficient code</li>
                                <li className='text-md text-gray-200 pl-3'>Automate tasks through appropriate tools and scripting</li>
                                <li className='text-md text-gray-200 pl-3'>Review and debug code</li>
                                <li className='text-md text-gray-200 pl-3'>Perform validation and verification testing</li>
                                <li className='text-md text-gray-200 pl-3'>Collaborate with internal teams and vendors to fix and improve products</li>
                                <li className='text-md text-gray-200 pl-3'>Document development phases and monitor systems</li>
                                <li className='text-md text-gray-200 pl-3'>Ensure software is up-to-date with latest technologies</li>
                            </ul>

                            
                            


                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </>
            )
}

            export default Mykra