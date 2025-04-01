import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const LessonLearn = () => {
  return (
    <>
    <Navbar/>
    <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[90vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div>
                        <div className='md:flex justify-between'>
                            <div className='text-xl font-semibold mb-8'>
                                <h1>Lesson Learned
                                </h1>
                            </div>

                        </div>

                        
                

                        <div className='flex sm:gap-8 gap-4 justify-between  flex-wrap order-1 overflow-hidden'>
                            <div className='flex gap-3 sm:w-auto my-1 w-full'>
                                <label htmlFor="">Show entries</label>
                                <select
                                    type="text"
                                    className="border border-gray-300 focus:outline-none focus:shadow p-1  flex-grow "
                                >

                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>

                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div className='flex gap-4 sm:w-auto my-1 w-full sm:order-1'>
                                <label htmlFor="">Search:</label>
                                <input type="text" name="price" id="price" className="block py-1.5 pl-7 text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow sm:text-sm sm:leading-6 w-full" placeholder="Search By Title" />
                            </div>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                                <thead className="bg-gray-50 ">
                                    <tr >
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">#</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Project Name</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">What Lesson Learned ?</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Created By</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">created date</th>
                                        <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">action</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr  >
                                        <td className="p-3  text-sm text-gray-600 ">01 </td>
                                        <td className="p-3  text-sm text-gray-600">
                                        TLN
                                        </td>
                                        <td className="p-3 text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus vero hic nemo voluptatem cumque inventore nulla quia cupiditate culpa!
                                        </td>
                                        <td className="p-3  text-sm text-gray-600">Kartik Barmera</td>
                                        <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
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

export default LessonLearn