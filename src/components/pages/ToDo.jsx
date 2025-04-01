import React from 'react'
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const ToDo = () => {
    return (
        <>
        <Navbar/>
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[80vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className=''>
                        <div className='md:flex justify-between'>
                            <div className='text-xl font-semibold mb-4'>
                                <h1>View To-Do List</h1>
                            </div>
                            <div className='mt-1'>
                                <div className='flex sm:flex-row flex-col justify-end sm:gap-4 gap-2'>
                                    <div className='flex gap-4 sm:w-auto w-full '>
                                        <div className="flex w-full sm:w-auto">
                                            <select value="Pending"
                                                className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                            >
                                                <option value="all projects">All Status</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Process">Process</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex z-0 sm:w-auto w-full justify-end sm:order-last order-first gap-4">
                                        <button type="button" className='rounded-md bg-green-400 text-white p-2 hover:bg-green-600 transition-all duration-700 ease-in-out text-sm font-semibold'>My TO-DO</button>
                                        <button type="button" className='rounded-md bg-orange-400 text-white p-2 hover:bg-orange-600 transition-all duration-700 ease-in-out text-sm font-semibold'>Assigned TO-DO</button>



                                    </div>
                                    <div className='flex sm:flex-row flex-col justify-end sm:gap-4 gap-2'>
                                        <button type="button" className='rounded-md bg-blue-600 text-white p-2 hover:bg-blue-800 text-sm font-semibold sm:order-last order-first'>ADD NEW</button>
                                    </div>
                                </div>
                              

                            </div>
                            

                        </div>
                        <div className="flex flex-wrap md:flex-nowrap sm:justify-center gap-4 mt-8">
                                    <div className="flex flex-wrap gap-3 sm:w-auto w-full ">
                                        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:w-auto w-full">
                                            <label htmlFor="startDate" className='text-nowrap'>Start Date:</label>
                                            <input type="date" name="start" id="startDate" className="border border-gray-300 px-2 py-1 w-full md:w-auto" />
                                        </div>
                                        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:w-auto w-full">
                                            <label htmlFor="endDate" className='text-nowrap'>End Date:</label>
                                            <input type="date" name="end" id="endDate" className="border border-gray-300 px-2 py-1 w-full md:w-auto" />
                                        </div>
                                    </div>
                                    <div className="sm:w-auto w-full">
                                        <button type="button" className="bg-orange-400 text-white font-semibold px-4 py-2 w-full sm:w-auto hover:bg-black transition-all duration-700 ease-in-out">Search</button>
                                    </div>
                                </div>


                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ToDo