import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';
const NcLog = () => {
  return (
    <>
    <Navbar/>
    <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[80vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className=''>
                        <div className=''>
                            <div className='text-xl font-semibold mb-2'>
                                <h1>NC Log</h1>
                            </div>


                        </div>
                        <div className='mt-6'>
                            <div className='flex sm:flex-row flex-col justify-end sm:gap-4 gap-2'>
                                <div className='flex gap-4 sm:w-auto w-full '>
                                <div className="flex w-full sm:w-auto">
                                <select
                                    className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                >
                                    <option value="all projects">All Projects</option>
                                    <option value="ems">EMS</option>
                                    <option value="lms">LMS</option>
                                </select>
                            </div>
                                </div>
                                <div className="flex z-0 sm:w-auto w-full sm:justify-start justify-between sm:order-last order-first gap-4">
                                    <button type="button" className='rounded-md bg-orange-400 text-white p-2 hover:bg-black transition-all duration-700 ease-in-out text-sm font-semibold'>SEARCH</button>
                                    <button type="button" className='rounded-md bg-blue-600 text-white p-2 hover:bg-blue-800 text-sm font-semibold sm:order-last order-first'>ADD NEW</button>


                                </div>
                            </div>
                            <div className='overflow-x-auto'>
                                <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">#</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">project</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">description of nc</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">cycle</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">date of audit</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">auditor</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">auditee</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">status</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">follow up date</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">closed date</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">days taken</th>
                                            <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr  >
                                            <td className="p-3  text-sm text-gray-600 ">no record found!! </td>

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
            <Footer/>
    </>
  )
}

export default NcLog