import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const ProfessionalProfile = () => {
  return (
    <>
      <Navbar />
      <div className='xl:px-12 px-3'>
        <div className='container-xl min-h-[90vh] mx-auto my-3 gap-2 bg-white px-4 py-8 '>
          <div>
            <div className='md:flex justify-between'>
              <div className='text-2xl font-semibold mb-2'>
                <h1>Professional Profile(s)
                </h1>
              </div>

            </div>
            <div className='flex gap-3 justify-start sm:justify-end flex-wrap overflow-hidden'>
              <div className='p-2 flex flex-wrap rounded gap-2 items-center bg-gray-100'>
                <div className='flex gap-1'>
                  <input type="radio" name="template" id="" />
                  <label htmlFor="template 1">Template 1</label>
                </div>
                <div className='flex gap-1'>
                  <input type="radio" name="template" id="" />
                  <label htmlFor="template 2">Template 2</label>
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <h3 className='font-semibold'>Technologies Legend:</h3>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 rounded-full bg-green-600 shadow'></div>
                  <span>Expert |</span>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 rounded-full bg-blue-600 shadow'></div>
                  <span>Intermediate |</span>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 rounded-full bg-yellow-400 shadow'></div>
                  <span>Beginner </span>
                </div>
              </div>
            </div>
            <div className=''>

              <div className='overflow-x-auto'>
                <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">#</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">IMAGE</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">NAME</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Email</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">PHONE</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">EXPERIENCE</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">INDUSTRY/DOMAIN</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">TECHNOLOGIES</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">TRAINING</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">PM REVIEW</th>
                      <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 align-top">
                    <tr  >
                      <td class="p-3  text-sm text-gray-600">1</td>
                      <td class="p-3  text-sm text-gray-600">
                        <img src="images/profile image.jpg" alt="ProfilPic" className='img-fluid  mx-auto' />
                      </td>
                      <td class="p-3  text-sm text-gray-600">Navin Goyat</td>
                      <td class="p-3  text-sm text-gray-600">navin.goyat@parasme.com</td>
                      <td class="p-3  text-sm text-gray-600">809455****</td>
                      <td class="p-3  text-sm text-gray-600">1-2 years</td>
                      <td class="p-3  text-sm text-gray-600  ">CRM | Payment Gateway | e-commerce | IT & Technology |App Design</td>
                      <td class="p-3  text-sm text-gray-600 ">Android | Node | Mongo DB | Kotlin</td>
                      <td class="p-3  text-sm text-gray-600"><button className='bg-green-400 text-white p-1 rounded text-xs'>Pending</button></td>
                      <td class="p-3  text-sm text-gray-600"><button className='bg-green-400 text-white p-1 rounded text-xs'>Pending</button></td>
                      <td class="p-3  text-sm text-gray-600 flex gap-2"><Link to=""><button className='px-2 py-1 bg-gray-400 text-white rounded'>View</button></Link>
                        <Link to=''><button className='px-2 py-1 bg-gray-400 text-white rounded'>Edit</button></Link>
                        <Link to=''><button className='px-2 py-1 bg-green-600 text-white rounded'>Download</button></Link></td>
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
                        className="relative z-10 inline-flex items-center bg-gray-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
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
      <Footer />
    </>
  )
}

export default ProfessionalProfile