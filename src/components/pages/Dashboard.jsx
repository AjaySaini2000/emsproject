import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import { MdOutlineMoveToInbox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Footer from '../common/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  
  
  return (
    <div className='font-Roboto'>
      <Navbar />
      <div className='xl:px-12 px-3'>
        <div className="container-xl bg-white mx-auto py-4 my-3 flex items-center justify-center text-center">
          {/* You can replace this with your actual content */}
          <p className='capitalize text-xl px-2 my-3' >Congratulation <span className='text-dark-pink font-semibold underline'>Mrs. Radheshyam Sharma </span>On your Work Anniversary.</p>
        </div>
      </div>
      <div className='xl:px-12 px-3'>
        <div className="container-xl flex flex-col md:flex-row lg:justify-between  mx-auto md:my-3 text-nowrap gap-1">
          <div className=" w-full flex lg:justify-start">
            <ul className="flex flex-wrap lg:flex-nowrap lg:justify-start w-full lg:gap-0 gap-1">
              <li className="px-3 py-2 lg:px-4 text-[gray] hover:bg-[#cadec9] hover:text-white cursor-pointer bg-white">Today's Call</li>
              <li className="px-3 py-2 lg:px-4 text-[gray] hover:bg-[#cadec9] hover:text-white cursor-pointer bg-white">Tomorrow's Call</li>
              <li className="px-3 py-2 lg:px-4 text-[gray] hover:bg-[#cadec9] hover:text-white cursor-pointer bg-white">This Week Call</li>
              <li className="px-3 py-2 lg:px-4 text-[gray] hover:bg-[#cadec9] hover:text-white cursor-pointer bg-white">Pending Call</li>
            </ul>
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:justify-end  md:mt-0 mt-2  gap-2">
            <div>
              <button type="button" className="rounded-[100px] border border-dark-pink px-4 py-2  text-dark-pink hover:bg-green-500 hover:text-white hover:border-none lg:px-5">
                Project Start
              </button>
            </div>
            <div>
              <button type="button" className="flex items-center justify-center rounded-[100px] bg-dark-pink hover:bg-green-500 px-4 py-2  text-white lg:px-5">
                <span className="flex gap-1 items-center">
                  <svg className="h-[22px] w-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                  Check Your KRA
                </span></button>
            </div>
          </div>
        </div>
      </div>

      <div className='xl:px-12 px-3'>
        <div className='container-xl flex flex-col sm:flex-row  mx-auto my-3 gap-2'>
          <div className='sm:basis-1/2 md:basis-1/3 xl:basis-1/4  h-[130px] text-white p-4 bg-gradient-to-b from-[#efad2b] to-[#954913] rounded-md cursor-pointer'>
            <div className='flex gap-3'>

              <MdOutlineMoveToInbox className='text-[38px] bg-[rgba(0,0,0,0.3)] p-[4px] rounded-md' />
              <div className=''>

                <article className="">
                  <h1>Client's to be Chased</h1>
                  <p className='font-bold text-3xl'>
                    01
                  </p>
                </article>
              </div>
            </div>
            <div className=''></div>
          </div>
          <div className='sm:basis-1/2 md:basis-1/3 xl:basis-1/4 h-[130px] text-white p-4 bg-gradient-to-b from-[#1c4f9b] to-[#0b3949] rounded-md cursor-pointer'>
            <div className='flex gap-3'>

              <MdOutlineMoveToInbox className='text-[38px] bg-[rgba(0,0,0,0.3)] p-[4px] rounded-md' />
              <div className=''>
                {/* <span>Client's to be Chased</span> */}
                <article className="">
                  <h1>Client's to be Chased</h1>
                  <p className='font-bold text-3xl'>
                    100
                  </p>


                </article>
              </div>
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
      <div className='xl:px-12 px-3'>
        <div className='container-xl mx-auto my-3 gap-2 bg-white px-4 py-8'>
          <div className='md:flex justify-between'>
            <div className='text-[21px] font-semibold'>
              <h3>Client's to be Chased</h3>
            </div>
            <div className="relative rounded-md md:my-0 my-2 z-0 ">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><IoIosSearch /></span>
              </div>
              <input type="text" name="price" id="price" className="block w-full rounded-md py-1.5 pl-7 pr-20 text-gray-9 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow  sm:text-sm sm:leading-6" placeholder="Search" />
            </div>
          </div>
          <div className='overflow-auto'>
            <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">S.No</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Crm ID</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Client Name</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Project Name</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Engagement Date</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Ba Name</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Team Leader Name</th>
                  <th scope="col" className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr  className=''>
                  <td className="p-3  text-sm text-gray-600">01 </td>
                  <td className="p-3 text-sm text-gray-600"> 0001 </td>
                  <td className="p-3 text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3 text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className='text-nowrap'>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3 text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3 text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3 text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3 text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>
                  </td>
                </tr>
                <tr  >
                  <td className="p-3 text-sm text-gray-600">02 </td>
                  <td className="p-3  text-sm text-gray-600"> 0356 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr>
                <tr  >
                  <td className="p-3  text-sm text-gray-600">03 </td>
                  <td className="p-3  text-sm text-gray-600"> 04621 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr><tr  >
                  <td className="p-3  text-sm text-gray-600">04 </td>
                  <td className="p-3  text-sm text-gray-600"> 4545 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr><tr  >
                  <td className="p-3  text-sm text-gray-600">05 </td>
                  <td className="p-3  text-sm text-gray-600"> 9895 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr><tr  >
                  <td className="p-3  text-sm text-gray-600">06 </td>
                  <td className="p-3  text-sm text-gray-600"> 4856 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr>
                <tr  className=''>
                  <td className="p-3  text-sm text-gray-600">07 </td>
                  <td className="p-3 text-sm text-gray-600"> 0031 </td>
                  <td className="p-3 text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3 text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className='text-nowrap'>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3 text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3 text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3 text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3 text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>
                  </td>
                </tr>
                <tr  >
                  <td className="p-3 text-sm text-gray-600">08 </td>
                  <td className="p-3  text-sm text-gray-600"> 0356 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr>
                <tr  >
                  <td className="p-3  text-sm text-gray-600">09 </td>
                  <td className="p-3  text-sm text-gray-600"> 04621 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
                </tr><tr  >
                  <td className="p-3  text-sm text-gray-600">10 </td>
                  <td className="p-3  text-sm text-gray-600"> 4545 </td>
                  <td className="p-3  text-sm text-gray-600">Gideon Ashby (USA)</td>
                  <td className="p-3  text-sm text-gray-600"><div className=''><span className='font-semibold'>Custom Upgrade</span>
                    <p className=''>Generated Date: Sep 16,2024 12:30Pm
                      <br />
                      Last Activity: Sep 17, 2024 11:22Pm</p></div></td>
                  <td className="p-3  text-sm text-gray-600">Sep 20, 2024</td>
                  <td className="p-3  text-sm text-gray-600">Abhay Srivastava</td>
                  <td className="p-3  text-sm text-gray-600">Manish Kumar Marotiya</td>
                  <td className="p-3  text-right text-sm font-medium">
                    <Link to="#" className="text-dark-pink hover:text-[#be1044] px-2 border border-dark-pink rounded-xl">Edit</Link>      </td>
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
      <Footer />
    </div>


  );
};

export default Dashboard;