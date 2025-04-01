import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'
import { FaDownload } from "react-icons/fa";

const Vaccination = () => {
    return (
        <>
            <Navbar />
            <div className='xl:px-12 px-3'>

                <div className='container-xl mx-auto my-3 gap-2 bg-white px-4 py-8'>
                    <div className='mb-6'>
                        <div className='md:flex justify-between'>
                            <div className='text-xl font-semibold mb-2'>
                                <h1>Add/Update My Vaccination Status</h1>
                            </div>

                        </div>
                        <div className='mt-12'>

                            <form action="" method="post">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-6">


                                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                                        <div className=''>
                                            <label className="block text-sm font-medium mb-1">Vaccine Name*</label>

                                        </div>
                                        <div className='col-span-3'>

                                            <select
                                                type="text"
                                                className="border border-gray-300 focus:outline-none focus:shadow p-2  flex-grow w-full"
                                            >
                                                <option value="">select</option>
                                                <option value="Covaxin">Covaxin</option>
                                                <option value="Covishield">Covishield</option>
                                                <option value="Sputnik V">Sputnik V</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                                        <div className=''>
                                            <label className="block text-sm font-medium mb-1">Vaccinated*</label>

                                        </div>
                                        <div className='col-span-3 flex gap-3'>

                                            <label className=''>
                                                <input type="radio" name="vaccinationstatus" className="mr-1" /> Partially
                                            </label>
                                            <label>
                                                <input type="radio" name="vaccinationstatus" className="mr-1 " /> Fully
                                            </label>
                                        </div>
                                    </div>



                                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                                        <div className=''>
                                            <label className="block text-sm font-medium mb-1">Dose 1 (Date)*</label>

                                        </div>
                                        <div className='col-span-3'>

                                            <input
                                                type="Date"
                                                className="border border-gray-300 focus:outline-none focus:shadow p-2  flex-grow w-full "
                                            >

                                            </input>
                                        </div>


                                    </div>
                                    
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-6">
                                <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                                        <div className=''>
                                            <label className="block text-sm font-medium mb-1">Upload Certificate*</label>

                                        </div>
                                        <div className='col-span-3'>

                                            <input
                                                type="file"
                                                className="flex-grow w-full"
                                            >

                                            </input>
                                        </div>


                                    </div>
                                    </div>
                                <h2 className='text-xl font-semibold mb-2'>Declaration</h2>
                                <p className=''>I <input type="text" name="" value="manmohan" className='border px-2 border-gray-300 text-gray-500' /> hereby, acknowledge that the above information is true and valid to the best of my knowledge.</p>
                                <div className='flex justify-end my-8'>
                                <button type="submit" className='bg-green-600 text-white font-semibold px-4 py-2 mr-10 hover:bg-black transition-all duration-700 ease-in-out'>Submit</button>
                                </div>
                                
                            </form>

                        </div>


                    </div>

                    <div>
                        <div className='md:flex justify-between'>
                            <div className='text-xl font-semibold mb-2'>
                                <h1>My Vaccination Record</h1>
                            </div>

                        </div>
                        <div className='mt-10'>

                            <div className='overflow-x-auto'>
                                <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">#</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Vaccine</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Vaccination Status</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Added date</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Vaccination certificate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr  >
                                            <td className="p-3  text-sm text-gray-600 ">01 </td>
                                            <td className="p-3  text-sm text-gray-600 ">Covishield</td>
                                            <td className="p-3  text-sm text-gray-600">Fully Vaccinated</td>
                                            <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                                            <td className="p-3  text-sm flex items-center text-[blue] gap-2"><FaDownload /><Link to="#" className="underline underline-offset-1">Android Coding Guideline v1.0</Link></td>

                                        </tr>
                                        <tr  >
                                            <td className="p-3  text-sm text-gray-600 ">01 </td>
                                            <td className="p-3  text-sm text-gray-600 ">Covishield</td>
                                            <td className="p-3  text-sm text-gray-600">Fully Vaccinated</td>
                                            <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                                            <td className="p-3  text-sm flex items-center text-[blue] gap-2"><FaDownload /><Link to="#" className="underline underline-offset-1">Android Coding Guideline v1.0</Link></td>

                                        </tr>
                                            



                                    </tbody>

                                </table>

                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-3 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <Link
                                        to="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Previous
                                    </Link>
                                    <Link
                                        to="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Next
                                    </Link>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                            <span className="font-medium">97</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                            <Link
                                                to="#"
                                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                            </Link>

                                            <Link
                                                to="#"
                                                aria-current="page"
                                                className="relative z-10 inline-flex items-center bg-gray-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                1
                                            </Link>
                                            <Link
                                                to="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                2
                                            </Link>
                                            <Link
                                                to="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                3
                                            </Link>
                                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                                ...
                                            </span>
                                            <Link
                                                to="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                8
                                            </Link>
                                            <Link
                                                to="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                9
                                            </Link>
                                            <Link
                                                to="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                10
                                            </Link>
                                            <Link
                                                to="#"
                                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />

                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Vaccination