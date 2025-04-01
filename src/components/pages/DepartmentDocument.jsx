import React from 'react'
import Navbar from '../common/Navbar'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const DepartmentDocument = () => {
  return (
    <>
      <Navbar />
      <div className='xl:px-12 px-3'>
        <div className='container-xl mx-auto my-3 gap-2 bg-white px-4 py-8'>
          <div>
            <div className='md:flex justify-between'>
              <div className='text-2xl font-semibold mb-2'>
                <h1>Department Documents
                </h1>
              </div>

            </div>
            <div className=''>
              <div className="relative rounded-md md:my-0 my-2 z-0 ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm"><IoIosSearch /></span>
                </div>
                <input type="text" name="price" id="price" className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow sm:text-sm sm:leading-6" placeholder="Search By Document" />
              </div>
              <div className='overflow-x-auto'>
                <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">#</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">DEPARTMENT</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">DOCUMENT</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">DATE</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr  >
                      <td className="p-3  text-sm text-gray-600 ">01 </td>
                      <td className="p-3  text-sm text-gray-600">
                        Mobile Department
                      </td>
                      <td className="p-3  text-sm flex items-center text-[blue] gap-2"><FaDownload /><Link to="#" className="underline underline-offset-1">Android Coding Guideline v1.0</Link></td>
                      <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
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

export default DepartmentDocument