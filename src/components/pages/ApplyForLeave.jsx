import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

import Navbar from '../common/Navbar';

import Footer from '../common/Footer'

const ApplyForLeave = () => {
    return (
        <>
        <Navbar/>
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[110vh] my-3 gap-2 bg-white px-4 py-8 '>
                    <div className='md:flex justify-between mb-4'>
                        <div className='text-xl font-semibold mb-2'>
                            <h1>Manage Leaves
                            </h1>
                        </div>

                    </div>
                    <div className='flex  md:gap-6 gap-2 justify-end flex-wrap-reverse mb-4'>
                        <div className="flex items-center w-full sm:w-auto">
                            <div className=" flex w-full sm:w-auto">
                                <select
                                    className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                >
                                    <option value="All Leaves">All Leaves</option>
                                    <option value="Lose Of Pay[A]">Lose Of Pay[A]</option>
                                    <option value="Compensatory Off[CO]">Compensatory Off[CO]</option>
                                    <option value="CL">CL[CL]</option>
                                    <option value="Paternity Leave[PL]">Paternity Leave[PL]</option>
                                    <option value="Earned Leave[EL]">Earned Leave[EL]</option>
                                    <option value="Sick Leave[SL]">Sick Leave[SL]</option>
                                    <option value="Bereavement Leave[BL]">Bereavement Leave[BL]</option>
                                    <option value="Wedding Leave[WL]">Wedding Leave[WL]</option>

                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full sm:w-auto">
                            <div className="flex w-full sm:w-auto">
                                <select
                                    className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                >
                                    <option value="">Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Cancel">Cancel</option>
                                    <option value="UnApproved">UnApproved</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full sm:w-auto">
                            <div className="flex w-full sm:w-auto">
                                <select
                                    className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                >
                                    <option value="">Normal/ Urgent Leaves</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Urgent">Urgent</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mb-4'>
                        <button type="button" className="bg-orange-400 text-white font-semibold p-2 w-auto hover:bg-black transition-all duration-700 ease-in-out">Apply Leave</button>
                    </div>
                    
                        <div className='overflow-x-auto mb-4'>
                            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        <th scope="col" colSpan="8" className='p-3 text-md uppercase font-medium tracking-wider'>your leave balance summary</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="p-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">leave type</th>
                                        <th scope="col" className="p-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">casual leave</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">earned leave</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">sick leave</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">wedding leave</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">compensatry off</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">bereavement leave</th>
                                        <th scope="col" className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">paternity leave</th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                       <th className='text-sm text-red-500 font-normal text-center p-3 border border-gray-200 tracking-wider'>Current Leave Balance</th> 
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-orange-400'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-blue-400'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-gray-400'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-yellow-400'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-green-400'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-lime-300'>0</th>
                                       <th className='text-sm font-normal text-center p-3 border border-gray-200 tracking-wider bg-zinc-500'>0</th>
                                    </tr>
                                </tbody>
                            </table>
                         

                        </div>
                        <div className='grid grid-cols-2 mb-4 gap-4'>
<div className='lg:col-span-1 col-span-2 border border-zinc-400'>
    <div className='px-2 py-1 border-b border-zinc-400 text-sm tracking-wider'>
    Name: <strong>Sunil</strong>
    </div>
    <div className='grid grid-cols-2 border-b border-zinc-400 text-sm tracking-wider divide-x divide-zinc-400'>
    <div className='col-span-1 px-2 py-1 '>From: <strong>01/10/2024</strong></div>
    <div className='col-span-1 px-2 py-1'>To: <strong>31/10/2024</strong></div>
        

    </div>
    <div className='grid grid-cols-2 text-sm tracking-wider divide-x divide-zinc-400'>
    <div className='col-span-1 px-2 py-1 '>Holiday Leave: <strong>35</strong></div>
        <div className='col-span-1 px-2 py-1'>Pending Leave: <strong>0</strong></div>
    </div>
               
</div>
<div className="lg:col-span-1 col-span-2">
    <form action="" method="post">
        <div className="flex flex-wrap md:flex-nowrap justify-end gap-3">
            <div className="flex lg:flex-nowrap flex-wrap gap-2 sm:w-auto w-full justify-end">
                <div className="flex flex-wrap gap-2 sm:w-auto w-full">
                    <label htmlFor="startDate" className='text-nowrap'>Start Date:</label>
                    <input type="date" name="start" id="startDate" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 w-full md:w-auto" />
                </div>
                <div className="flex flex-wrap gap-2 sm:w-auto w-full">
                    <label htmlFor="endDate" className='text-nowrap'>End Date:</label>
                    <input type="date" name="end" id="endDate" className="border border-gray-300 focus:outline-none focus:shadow px-2 py-1 w-full md:w-auto" />
                </div>
            </div>
            <div className="flex items-end">
                <button type="button" className="bg-orange-400 text-white font-semibold px-4 py-2 w-full sm:w-auto hover:bg-black transition-all duration-700 ease-in-out">Search</button>
            </div>
        </div>
    </form>
</div>


                        </div>
                    
                        <div className='overflow-x-auto'>
                            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                <thead className="bg-gray-50 ">
                                    <tr >
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">sr no.</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">name</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">start date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">end date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">leave category</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">reason</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">leave type</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">status</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">apply date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">modify by</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">modify date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-500 ">01 </td>
                                        <td className="p-3  text-sm text-gray-500">
                                            Sunil
                                        </td>
                                        <td className="p-3 text-sm text-gray-500">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-500">mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Earned Leave</td>
                                        <td className="p-3  text-sm text-gray-500">medical reason</td>
                                        <td className="p-3  text-sm text-gray-500">full(urgent)</td>
                                        <td className="p-3  text-sm text-gray-500">approved</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Dimple</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
                                        <td className="p-3  text-sm "><button type="button" className='px-2 font-medium rounded-full bg-blue-400 text-white'>Edit</button></td>
                                        
                                    </tr>
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-500 ">01 </td>
                                        <td className="p-3  text-sm text-gray-500">
                                            Sunil
                                        </td>
                                        <td className="p-3 text-sm text-gray-500">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-500">mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Earned Leave</td>
                                        <td className="p-3  text-sm text-gray-500">medical reason</td>
                                        <td className="p-3  text-sm text-gray-500">full(urgent)</td>
                                        <td className="p-3  text-sm text-gray-500">approved</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Dimple</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
                                    </tr>
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-500 ">01 </td>
                                        <td className="p-3  text-sm text-gray-500">
                                            Sunil
                                        </td>
                                        <td className="p-3 text-sm text-gray-500">
                                        mon, oct 10,2024
                                        </td>
                                        
                                        <td className="p-3  text-sm text-gray-500">mon, oct 10,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Earned Leave</td>
                                        <td className="p-3  text-sm text-gray-500">medical reason</td>
                                        <td className="p-3  text-sm text-gray-500">full(urgent)</td>
                                        <td className="p-3  text-sm text-gray-500">approved</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
                                        <td className="p-3  text-sm text-gray-500">Dimple</td>
                                        <td className="p-3  text-sm text-gray-500">thu, oct 16,2024</td>
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
            <Footer/>
        </>
    )
}

export default ApplyForLeave