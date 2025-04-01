import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

const Workfromhome = () => {
  return (
    <>
    <Navbar/>
    <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[90vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className=''>
                        <div className='md:flex justify-between'>
                            <div className='text-xl font-semibold mb-2'>
                                <h1>Manage - Work From Home
                                </h1>
                            </div>

                        </div>

                        
                        <div className="flex flex-wrap sm:gap-12 gap-2 justify-end overflow-hidden mb-4">    
                            {/* Left section with Technology label and dropdown */}
                            <div className="flex flex-wrap items-center my-1 w-full sm:w-auto order-1">
                                    
                                    <select
                                        className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow w-full sm:w-auto"
                                    >
                                        <option value="">Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Cancel">Cancel</option>
                                        <option value="UnApproved">UnApproved</option>

                                    </select>
                            </div>

                            {/* Right section with buttons  */}
                            <div className="flex flex-wrap items-center justify-end w-full sm:w-auto sm:order-1 mt-4 sm:mt-0">
                                <button
                                    type="button"
                                    className="bg-orange-400 text-white font-semibold p-2 w-auto hover:bg-black transition-all duration-700 ease-in-out"
                                >
                                    APPLY WFH
                                </button>
                                
                            </div>
                        </div>
                        <div className="md:col-span-1 col-span-2">
    <form action="" method="post">
        <div className="flex flex-wrap md:flex-nowrap justify-end gap-3">
            <div className="flex flex-wrap gap-3 sm:w-auto w-full justify-end">
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:w-auto w-full">
                    <label htmlFor="startDate" className='text-nowrap'>Start Date:</label>
                    <input type="date" name="start" id="startDate" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 w-full md:w-auto" />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:w-auto w-full">
                    <label htmlFor="endDate" className='text-nowrap'>End Date:</label>
                    <input type="date" name="end" id="endDate" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 w-full md:w-auto" />
                </div>
            </div>
            <div className="sm:w-auto w-full">
                <button type="button" className="bg-orange-400 text-white font-semibold px-4 py-2 w-full sm:w-auto hover:bg-black transition-all duration-700 ease-in-out">Search</button>
            </div>
        </div>
    </form>
</div>

                       
<div className='overflow-x-auto'>
                            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                <thead className="bg-gray-50 ">
                                    <tr >
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">sr no.</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">name</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">start date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">end date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">comment</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">team manager</th>
                                        
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">status</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">apply date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">approved by</th>
                                        
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-600 ">01 </td>
                                        <td className="p-3  text-sm text-gray-600">
                                            Sunil
                                        </td>
                                        <td className="p-3 text-sm text-gray-600">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-600">Bharat Band</td>
                                        <td className="p-3  text-sm text-gray-600">Arvind Bhambhani</td>
                                        <td className="p-3  text-sm text-gray-600">Approved</td>
                                        <td className="p-3  text-sm text-gray-600">Wed, Aug 21, 2024</td>
                                        <td className="p-3  text-sm text-gray-600">Dimple Yadav</td>
                                        
                                        <td className="p-3  text-sm "><button type="button" className='px-2 font-medium rounded-full bg-blue-400 text-white'>Edit</button></td>
                                        
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
            <Footer/>
    </>
  )
}

export default Workfromhome