import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Timesheet = () => {
    return (
        <>
        <Navbar/>
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[90vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className=''>
                        <div className=''>
                            <div className='text-xl font-semibold mb-2'>
                                <h1>Manage - Work From Home
                                </h1>
                            </div>

                        </div>



                        <div className="md:col-span-1 col-span-2 my-4">
                            <form action="" method="post">
                                <div className="flex flex-wrap sm:flex-wrap-reverse md:flex-nowrap justify-end gap-3">
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
                        <div className='my-4'>
                            <p className='text-xs tracking-wider text-zinc-500'>Note : If you are working on any project as a paid developer then please select virtual developer instead of Designer, Tester, I Helped, Managing, Free (Bug Fixing / R & D / Learning) and Estimation, Mockup & Wireframing at the time of fill timesheet. If virtual developer will not come on virtual developer dropdown list of any project then please contact to your team leader or project manager to add virtual developer into this.</p>
                        </div>
                        <div className='my-4'>
                            <p className='text-md tracking-wider text-orange-500 font-medium'>Note: From Now - you need to fill timesheet of projects under CMMi through PMS only. So you are unable to select the projects in timesheet. Please contact your PM for more information.</p>
                        </div>

                        <div className='overflow-x-auto'>
                            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                <thead className="bg-gray-50 ">
                                    <tr >
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">sr no.</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                            <input type="date" name="start" id="startDate" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1" />
                                            </th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                            <select
                                        className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 flex-grow"
                                    >
                                        <option value="">Ems</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Cancel">Cancel</option>
                                        <option value="UnApproved">UnApproved</option>

                                    </select></th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                        <select
                                        className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 flex-grow"
                                    >
                                        <option value="">programming</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Cancel">Cancel</option>
                                        <option value="UnApproved">UnApproved</option>

                                    </select>
                                        </th>
                                    
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                        <input type="time" name="time" id="time" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1" />
                                        </th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                        <input type="text" name="" id="" placeholder="Details" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 w-full" />
                                        </th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                        <select
                                        className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 flex-grow"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Complete">Complete</option>
                                        

                                    </select>
                                        </th>
                                        
                                        
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">
                                        <button type="button" className="bg-orange-400 text-white font-semibold px-4 py-2 w-full sm:w-auto hover:bg-black transition-all duration-700 ease-in-out">Add</button>
                                        </th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-600 ">01 </td>
                                        
                                        <td className="p-3 text-sm text-gray-600">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-600"><span className='font-semibold'>Employee Management</span><br />Added on mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-600">Programming</td>
                                        <td className="p-3  text-sm text-gray-600">2 hr</td>
                                        <td className="p-3 text-sm text-gray-600">
                                            Sprint 3 : B - 011 :: * Integration for checking database for dublicate projects and batchesPMS
                                            
                                            </td>
                                            <td className="p-3 text-sm text-gray-600">
                                            Pending
                                            </td>
                                        <td className="p-3  text-sm text-gray-600"></td>
                                        
                                        
                                    </tr>
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-600 ">01 </td>
                                        
                                        <td className="p-3 text-sm text-gray-600">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-600"><span className='font-semibold'>Employee Management</span><br />Added on mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-600">Programming</td>
                                        <td className="p-3  text-sm text-gray-600">2 hr</td>
                                        <td className="p-3 text-sm text-gray-600">
                                            Sprint 3 : B - 011 :: * Integration for checking database for dublicate projects and batchesPMS
                                            
                                            </td>
                                            <td className="p-3 text-sm text-gray-600">
                                            Pending
                                            </td>
                                        <td className="p-3  text-sm text-gray-600"></td>
                                        
                                        
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

export default Timesheet